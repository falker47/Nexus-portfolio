#!/usr/bin/env python3
"""Create lightweight WebP previews for Nexus Portfolio (idempotent).

Run from a checked-out repository with Pillow installed:
    python scripts/optimize_images.py

Original images are retained for rollback, compatibility and full-resolution
reference. Only browser-facing references are changed when files are smaller.
"""
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}
PROJECT_SOURCES = (
    "assets/projects/chilhadetto.png",
    "assets/projects/prof-gecko.jpg",
)


def save_webp(source: Path, target: Path, *, max_size=None, quality=85, lossless=False):
    """Encode a local source image and verify the generated output."""
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        has_alpha = "A" in image.getbands() or "transparency" in image.info
        image = image.convert("RGBA" if has_alpha else "RGB")
        if max_size:
            image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(target, format="WEBP", quality=quality, method=6, lossless=lossless)
    with Image.open(target) as check:
        check.verify()
    return target.stat().st_size


def replace_image_reference(path: Path, original: str, updated: str):
    text = path.read_text(encoding="utf-8")
    old = f'image: "{original}"'
    new = f'image: "{updated}"'
    if old in text:
        path.write_text(text.replace(old, new), encoding="utf-8")
    elif new not in text:
        raise ValueError(f"Missing expected project image reference: {original}")


def main():
    project_data = ROOT / "js/projects-data.js"
    cert_data = ROOT / "js/certifications-data.js"
    originals_total = 0
    previews_total = 0
    converted = 0

    for original in PROJECT_SOURCES:
        source = ROOT / original
        target = source.with_suffix(".webp")
        result_size = save_webp(source, target, max_size=(1200, 900), quality=84)
        if result_size < source.stat().st_size:
            replace_image_reference(
                project_data, original, target.relative_to(ROOT).as_posix()
            )
            converted += 1
            originals_total += source.stat().st_size
            previews_total += result_size
            print(f"PROJECT {original}: {source.stat().st_size} -> {result_size} bytes")
        else:
            target.unlink(missing_ok=True)
            print(f"PROJECT {original}: original retained (WebP was larger)")

    text = cert_data.read_text(encoding="utf-8")
    # Only process certificates actually linked by the site, not unused
    # originals sitting in the repository.
    source_paths = sorted(set(re.findall(
        r'image: "(assets/certifications/[^"]+\.(?:png|jpg|jpeg))"', text
    )))
    for original in source_paths:
        source = ROOT / original
        stem = source.with_suffix("")
        thumb = stem.with_name(stem.name + "-thumb.webp")
        full = stem.with_name(stem.name + "-full.webp")
        thumb_size = save_webp(source, thumb, max_size=(640, 460), quality=84)
        full_size = save_webp(source, full, quality=91)
        chosen_full = full if full_size < source.stat().st_size else source
        if chosen_full == source:
            full.unlink(missing_ok=True)
        if thumb_size >= source.stat().st_size:
            raise ValueError(f"Thumbnail did not reduce transfer size: {original}")

        full_ref = chosen_full.relative_to(ROOT).as_posix()
        thumb_ref = thumb.relative_to(ROOT).as_posix()
        old = f'image: "{original}"'
        new = f'image: "{full_ref}", thumbnail: "{thumb_ref}"'
        if old not in text:
            raise ValueError(f"Missing expected certificate record: {original}")
        text = text.replace(old, new)
        converted += 1
        originals_total += source.stat().st_size
        previews_total += thumb_size
        print(
            f"CERT {original}: preview {source.stat().st_size} -> {thumb_size} bytes"
            f"; full {chosen_full.stat().st_size} bytes"
        )
    cert_data.write_text(text, encoding="utf-8")

    logo = ROOT / "assets/branding/falkerlogo.png"
    logo_webp = logo.with_suffix(".webp")
    logo_size = save_webp(logo, logo_webp, quality=90, lossless=True)
    use_webp_logo = logo_size < logo.stat().st_size
    if not use_webp_logo:
        logo_webp.unlink(missing_ok=True)
    else:
        originals_total += logo.stat().st_size
        previews_total += logo_size
        print(f"BRAND logo: {logo.stat().st_size} -> {logo_size} bytes")

    for page in ROOT.glob("*.html"):
        page_text = page.read_text(encoding="utf-8")
        if use_webp_logo:
            # Keep PNG favicon and Apple touch icon for compatibility.
            page_text = page_text.replace(
                'src="assets/branding/falkerlogo.png"',
                'src="assets/branding/falkerlogo.webp"',
            )
        if page.name == "index.html":
            for filename in ("projects-data.js", "certifications-data.js", "script.js"):
                page_text = re.sub(
                    rf'(src="(?:js/)?{re.escape(filename)}\?v=)[^"]+',
                    r'\g<1>20261013-webp-v1',
                    page_text,
                )
        if page_text != page.read_text(encoding="utf-8"):
            page.write_text(page_text, encoding="utf-8")

    # Reference validation catches typos and missing outputs before committing.
    for path in (
        ROOT / "js/projects-data.js",
        ROOT / "js/certifications-data.js",
    ):
        data = path.read_text(encoding="utf-8")
        for asset in re.findall(r'"(assets/[^"]+\.(?:webp|png|jpg|jpeg))"', data):
            if not (ROOT / asset).is_file():
                raise FileNotFoundError(f"Missing referenced image: {asset}")

    if originals_total:
        reduction = 100 * (1 - previews_total / originals_total)
        print(
            f"OPTIMIZED_REFERENCES={converted}; "
            f"ORIGINAL_PREVIEW_BYTES={originals_total}; "
            f"WEBP_PREVIEW_BYTES={previews_total}; REDUCTION={reduction:.1f}%"
        )
    else:
        print("No new non-WebP image references to optimize.")


if __name__ == "__main__":
    main()

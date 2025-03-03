// Scroll smooth per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = 100; // Modifica questo valore per regolare l'offset desiderato
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  });
});


  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
  });


  document.getElementById("currentYear").textContent = new Date().getFullYear();
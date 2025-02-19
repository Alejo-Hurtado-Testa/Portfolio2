document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    /* Es una API que nos permite detectar cuando un elemento 
        (una sección en este caso) entra o sale de la vista del usuario
        */ (entries) => {
      // "Entries" es un array con información sobre los elementos observados (las secciones)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // "entry.isIntersecting" verifica si la sección está visible en la pantalla
          navLinks.forEach((link) => {
            // Por cada navLink que tenemos..
            link.classList.remove("active"); // Primero eliminamos la clase active asi se ilumina uno a la vez
            /* Verificamos si el href del link (#aboutme, etc.) coincide con el id de la sección que entró en la vista */
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active"); // Si coinciden, añadimos la clase active
            }
          });
        }
      });
    },
    { threshold: 0.3 } // Cambia según qué tan visible debe estar la sección para activarse
    /* Significa que el 50% de la sección debe estar visible en la pantalla antes de que el link se ilumine */
  );

  // Observamos todas las secciones
  // Esto hace que el IntersectionObserver vigile cada una y ejecute la función cada vez que una sección entre en la vista
  sections.forEach((section) => observer.observe(section));
});

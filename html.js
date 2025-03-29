

gsap.from(".logo-derecho", { 
    opacity: 1,
    y: 40, // Aparece desde abajo
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%", // Se activa cuando el footer está en 90% de la pantalla
        toggleActions: "play none none none",
    },
});

gsap.to(".logo-derecho", {
    y: 10, /* Se moverá 10px arriba y abajo */
    duration: 2,
    repeat: -1, /* Repetir infinito */
    yoyo: true, /* Hace que suba y baje */
    ease: "sine.inOut"
   
});
gsap.fromTo(".navbar", 
    { y: -50, opacity: 0 },  // Empieza arriba y oculto
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
);

gsap.fromTo(".nav-item", 
    { y: -20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
);
gsap.from(".logo-nav", { 
    x: -100, /* Se mueve desde la izquierda */
    opacity: 0, /* Inicia invisible */
    duration: 1.5, /* Tarda 1.5 segundos en aparecer */
    ease: "power2.out"
});
gsap.from(".p-div", { 
    x: -100, /* Se mueve desde la izquierda */
    opacity: 0, /* Inicia invisible */
    duration: 1.5, /* Tarda 1.5 segundos en aparecer */
    ease: "power2.out"
});
const carousel = document.querySelector('#carouselExampleCaptions');
  
  const animateCarouselItem = () => {
    const items = document.querySelectorAll('.carousel-item');
    
    items.forEach(item => {
      gsap.fromTo(item, 
        { opacity: 0, scale: 0.8 }, // Empieza invisible y pequeño
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" } // Termina visible y normal
      );
    });
  };

  // Inicializa la animación cuando el carrusel cambia de imagen
  carousel.addEventListener('slide.bs.carousel', () => {
    animateCarouselItem();
  });

  // Llamar a la animación inicial
  animateCarouselItem();

  gsap.from("footer", {
    opacity: 1,
    y: 100, // Aparece desde abajo
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%", // Se activa cuando el footer está en 90% de la pantalla
        toggleActions: "play none none none",
    },
});
gsap.utils.toArray(".imagen-link").forEach((imagen) => {
    imagen.addEventListener("mouseenter", () => {
        gsap.to(imagen, { scale: 1.1, filter: "brightness(1.2)", duration: 0.3 }); // Aumenta el tamaño y el brillo
    });
    
    imagen.addEventListener("mouseleave", () => {
        gsap.to(imagen, { scale: 1, filter: "brightness(1)", duration: 0.3 }); // Vuelve al tamaño original y brillo
    });
});
document.getElementById("year").textContent = new Date().getFullYear();

gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos a animar
  const features = gsap.utils.toArray(".puntos");

  // Animación para cada feature (uno tras otro)
  features.forEach((feature, index) => {
    gsap.from(feature, {
      opacity: 0,
      y: 50, // Desplazamiento desde abajo
      duration: 0.8,
      delay: index * 0.3, // Retraso entre cada uno
      scrollTrigger: {
        trigger: feature, // Elemento que activa la animación
        start: "top 80%", // Cuando el 80% del elemento entre en la pantalla
        toggleActions: "play none none none", // Solo se reproduce una vez
      }
    });
  });
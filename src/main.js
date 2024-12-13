import "./styles/main.scss"
import gsap from "gsap";


// Para que las barras de las gráficas aparezcan poco a poco de izquierda a derecha:
  gsap.from(".barra-1", {
    duration: 1.5,      
    width: 0,           
    ease: "power2.out"  
  });
  
  gsap.from(".barra-2", {
    duration: 1.5,      
    width: 0,           
    ease: "power2.out", 
    delay: 0.2          
  });

  gsap.from(".barra-3", {
    duration: 1.5,      
    width: 0,           
    ease: "power2.out", 
    delay: 0.4            
  });


  // Las imagenes de las card en la página de work, aparecen de arriba abajo
  gsap.from(".card1 img, .card2 img", {
    opacity: 0,
    y: -25,  // aparece de arriba abajo
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Los input del formulario rebotan y suben poco a poco uno a uno
  gsap.from('.formulario-contacto input', {

    y: 35, 
    stagger: 0.1, 
    duration: 1.1,
    ease: "back.out(1.7)", 
    delay: 0.3, 
  });







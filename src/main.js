import "./styles/main.scss"
import gsap from "gsap";



  gsap.from(".items-right img", { 
    duration: 1.5, 
    opacity: 0,      // La imagen comienza invisible
    rotation: 180,   // Rota desde 180 grados (gira desde un ángulo)
    ease: "back.out(1.7)" // Rebota suavemente al final
  });
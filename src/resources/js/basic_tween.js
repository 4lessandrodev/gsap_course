const SHARK = document.getElementById('shark');

gsap.fromTo(SHARK,
  { x: 150, y:30, opacity:0},
  { x: 400, duration: 3, y: 200, scale: 2, rotation: 360, opacity:1 }
);
const STAR = document.getElementById('star1');
const THREE_STARS = document.querySelectorAll('.star');

gsap.to(STAR, { x: 200, duration: 3, rotation: 360, scale: 2 });

//stagger:1 faz com que cada elemento do array seja iterado um por vez 
gsap.to(THREE_STARS, {stagger:1, x: 200, duration: 3, rotation: 360 });


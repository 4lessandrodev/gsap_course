const MONSTERS = document.querySelectorAll('#monsters img');
const TIME = document.getElementById('time');
const TITLE = document.getElementById('title');
const BACKGROUND = document.getElementById('background-moon');

gsap.timeline()
  .from(BACKGROUND,{opacity:0, duration:2})
  .from(TITLE, { opacity: 0, duration: 1, scale: 0, ease: "back" })
  .from(MONSTERS, { y: 460, stagger: 0.1, duration: 0.8, ease: "back" })
  .from(TIME, { xPercent: 100, ease: "back"});
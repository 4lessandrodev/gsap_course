const MONSTERS = document.querySelectorAll('#monsters img');
const TIME = document.getElementById('time');
const TITLE = document.getElementById('title');
const BACKGROUND = document.getElementById('background-moon');

//Adding after objet a parameter defining when the animation will start
//Exemple +=1 starts 1 secound after object before, 
//-=1 starts 1 secound before object before
// < starts on the same time of object before

gsap.timeline()
  .from(BACKGROUND, { opacity: 0, duration: 2 })
  .from(TITLE, { opacity: 0, duration: 1, scale: 0, ease: "back"},"+=1") // "+=1" vai começar um segundo após a anaimação anterior  
  .from(MONSTERS, { y: 460, stagger: 0.1, duration: 0.8, ease: "back" }, "-=1") // " -=1" vai começar um segundo antes da animação anterior 
  .from(TIME, { xPercent: 100, ease: "back" }, "<"); // "<" vai começar ao mesmo tempo que a animação anterior 
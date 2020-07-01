const PLAY = document.getElementById('play');
const REVERSE = document.getElementById('reverse');
const RESTART = document.getElementById('restart');
const PAUSE = document.getElementById('pause');
const STARS = document.querySelectorAll('.star');

const animation = gsap.to(STARS, { x: 1024, y: 0, rotation: 360, duration: 3, paused:true });
PLAY.addEventListener('click', () => animation.play());
REVERSE.addEventListener('click', () => animation.reverse());
RESTART.addEventListener('click', () => animation.restart());
PAUSE.addEventListener('click', () => animation.pause());
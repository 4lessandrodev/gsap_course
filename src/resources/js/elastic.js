let timeline = gsap.timeline();
const TEXT = document.querySelectorAll('.text');
const time = 3;

function animate() {
  timeline.from(TEXT, { y: 50, duration: time, ease: 'elastic.out(1, 0.3)', stagger: { amount: 0.5, from: "start" } });
  timeline.set(TEXT, { autoAlpha: 1, stagger: { amount: 0.5, from: "start" } },"<0.05");

}


window.addEventListener('load', animate);
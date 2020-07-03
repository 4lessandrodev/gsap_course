let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

gsap.registerPlugin(MotionPathPlugin);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause"); //better than document.querySelector("#pause")

let animation = gsap.to("#herman", {
  duration: 6, ease: "none",
  motionPath: {
    path: "#motionpath",
    align: "#herman"
  },
  onComplete: () => pause.innerHTML = "play"
});

window.addEventListener('load', function () {
  animation.play();
});

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "play" : "pause";
});
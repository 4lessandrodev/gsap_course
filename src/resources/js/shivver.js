let TEXT = document.getElementById('text');
let tween;

function animate() {

  gsap.set(TEXT, { autoAlpha: 1 });
  tween = gsap.to(TEXT, {
    duration: 2.5, ease: "rough({template:power0.none, strength:21, points:50, taper:'in', randomize:false, clamp:false})",
    x:5, repeat:1, yoyo:true
  });

}


window.addEventListener('load', animate);
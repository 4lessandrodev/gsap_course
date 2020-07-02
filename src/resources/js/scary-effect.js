let TEXT = document.getElementById('text');
let tween;

function animate() {
 
  gsap.set(TEXT, { autoAlpha: 1 });
  tween = gsap.from("h1", {
    duration: 0.3, ease: "rough({ template: power0.none, strength: 10, points: 50, taper: 'none', randomize: true, clamp:  true})",
    opacity: 0, scale:0.9, rotation:-5, repeat:3, yoyo:true
    });
  
}


window.addEventListener('load', animate);
const STARS = document.querySelectorAll('.star');

gsap.to(STARS[0], { x: 400, duration: 3, ease:"linear"});
gsap.to(STARS[1], { x: 400, duration: 3, ease:"bounce"});
gsap.to(STARS[2], { x: 400, duration: 3, ease:"bounce.in"});
gsap.to(STARS[3], { x: 400, duration: 2, ease:"bounce.out"});
gsap.to(STARS[4], { x: 400, duration: 2, ease:"bounce.inOut"});
gsap.to(STARS[5], { x: 400, duration: 2, ease:"elastic"});
gsap.to(STARS[6], { x: 400, duration: 2, ease:"back"});
gsap.to(STARS[7], { x: 400, duration: 2, ease:"back(6)"});
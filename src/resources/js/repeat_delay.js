const STARS = document.querySelectorAll('.star');

gsap.to(STARS[0], {x:400, duration:3, delay:1});
gsap.to(STARS[1], {x:400, duration:3, delay:0});
gsap.to(STARS[2], {x:400, duration:3, repeat:1});
gsap.to(STARS[3], {x:400, duration:2, repeat:2, yoyo:true});
gsap.to(STARS[4], {x:400, duration:2, repeat:-1, yoyo:true});
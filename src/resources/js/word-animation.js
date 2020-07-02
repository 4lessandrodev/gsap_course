const WORDS = document.querySelectorAll('h1');

let timeline = gsap.timeline({repeat:-1});
const time = 1;
const animate = () => {
  //No css o conteúdo está oculto, o autoAlpha configura cada palavra para visível
  gsap.set("#demo", { autoAlpha: 1 });
  timeline.fromTo(WORDS,
    { scale: 0 },
    {
      duration: time,
      scale: 6,
      ease: "slow(0.5, 0.8)",
      stagger: time
    }
  ).from(WORDS,
      {
        duration: time,
        opacity: 0,
        ease: "slow(0.5, 0.8, true)",
        stagger:time
      }, "<"
      
    );
};

window.addEventListener('load', animate);
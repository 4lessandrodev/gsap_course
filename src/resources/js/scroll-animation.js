gsap.registerPlugin(ScrollTrigger);
gsap.from('#icone', {
  duration: 3, x: "-50vw", rotation: -360, ease: 'linear', scrollTrigger: {
    trigger: "#animation",
    markers: true,
    start: "top 75%", //Inicio da linha de gatilho  RANGE
    end: "bottom 25%", //Fim da linha de gatilho RANGE
    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'restart complete reverse reset'
    //options: play, pause, resume, reset, restart, complete, reverse, none 
  }
});

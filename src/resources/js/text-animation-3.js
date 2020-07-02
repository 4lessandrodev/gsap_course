const IMAGE = document.getElementById('image');
const TEXT = document.getElementById('text');
const CONTEUDO = document.querySelector('.conteudo');
let tl = gsap.timeline({repeat:-1});

const animate = () => {
  tl.set(CONTEUDO, { autoAlpha: 1 });
  tl.set([IMAGE, TEXT], { xPercent:-100 })
    .to(TEXT, { xPercent: 0, duration: 3, x: 800, ease: "slow(0.6, 1.1)"})
    .to(IMAGE, { xPercent: 0, duration: 3, x: 300, ease: "slow(0.6, 1.4)"}, "<")
    .from([TEXT, IMAGE], { duration:3, scale:0, opacity:0.5,ease: "slow(0.6, 0.6, true)" }, "<");
};

window.addEventListener('load', animate);
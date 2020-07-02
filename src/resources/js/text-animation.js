const TITLE = document.getElementById('title');
const SUBTITLE = document.getElementById('subtitle');
const TEXT = document.getElementById('text');

//O texto será o resultado final
gsap.to(TITLE, { text: "Hello World from GSAP", duration: 3, ease: 'power1.in' });
//Com from o texto será iniciado
gsap.from(SUBTITLE, { text: "Subtitle from gsap", duration: 3, ease: 'power1.in' });
//Com from o texto será iniciado
gsap.from(TEXT, { text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.", duration: 3, ease: 'power1.in', repeat: 2, yoyo: true });

//REQUIRE REGISTER
/*
let split;
let animation = gsap.timeline({});
const textanimation = () => {
  split = new SplitText(TEXT, { type: "chars" });
  animation.from(split.chars, {opacity:0, y:50, ease:"back", stagger:0.05});
}

window.addEventListener('load', textanimation);
*/  
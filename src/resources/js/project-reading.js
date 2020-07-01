const BACKGROUND = document.getElementById('main');

const TIMELINE = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function init() {
  TIMELINE.from(BACKGROUND, { duration: 1,/*opacity: 0 = receive value as defaults params*/ ease: 'linear' /* Sobrepor o default */ , autoAlpha:0 /* autoAlpha altera o css para visivel*/})
    .from('h1', { x: 80, duration: 2/*opacity: 0 = receive value as defaults params*/ })
    .from('h2', { x: -80, duration: 2/*opacity: 0 = receive value as defaults params*/ }, "<")
    .from('p', { y: 30, /*opacity: 0 = receive value as defaults params*/ }, "-=0.2")
    .from('input', { y: 30 /*opacity: 0 = receive value as defaults params*/ }, "-=0.4")
    .from('#itens img', { y: 300, scale: 0, /*opacity: 0 = receive value as defaults params*/ duration: 3, stagger: 0.5 }, "<")
    .from('#main .star', { scale: 0, /*opacity: 0 = receive value as defaults params*/ transformOrigin: "50% 50%", stagger: 0.1 });
}

//Inicializar animação somente após finalizar o carregamento da tela 
//O elemento Main está configurado visibility:hidden para evitar que as imagens sejam exibidas antes do carregamento da pagina 
window.addEventListener('load', init);
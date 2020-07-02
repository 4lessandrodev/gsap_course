const ICON = document.getElementById('icon');
gsap.registerPlugin(CustomEase);

CustomEase.create("meuEfeito1", "M0,0 C0.126,0.382 0.12,0.868 0.504,0.54 0.704,0.369 0.818,1.001 1,1 ");
CustomEase.create("meuEfeito2", "M0,0 C0,0 0.089,-0.306 0.218,-0.302 0.68,-0.286 0.34,0.702 0.834,0.598 0.962,0.57 1,0 1,0 ");

let animation = gsap.to(ICON, { duration: 0.5, scale: 2, ease:'meuEfeito2'});


ICON.addEventListener('click', function () {
  animation.restart();
});


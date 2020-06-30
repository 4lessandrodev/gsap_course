const SHARKS = document.querySelectorAll('#sharks img');

//O stagger pode receber uma variável com o tempo de delay entre os objetos 
//gsap.to(SHARKS, { x: 150, y: -250, duration: 3, rotation: 360, stagger: 0.5});


//Também pode definir o stagger como um objeto recebendo o intervalo entre cada elemento
//gsap.to(SHARKS, { x: 150, y: -250, duration: 3, rotation: 360, stagger:{each:0.5} });

//Também pode definir o stagger como um objeto recebendo o montante de intervalo entre cada elemento
//gsap.to(SHARKS, { x: 150, y: -250, duration: 3, rotation: 360, stagger:{amount:2} });

//Também pode definir o stagger como um objeto recebendo o intervalo entre cada elemento e a posição inicial da animação
//center
//end
//edges
//gsap.to(SHARKS, { x: 0, y: -250, duration: 2, stagger:{each:0.2, from:"center"} });

gsap.to(SHARKS, { x: 0, y: -250, duration: 2, stagger: { amount: 0.5, from: "center" } });
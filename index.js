const power = document.querySelector(".botonPower");
const h1 = document.querySelector("h1");
const pulsa = document.querySelector(".pulsa");
const funciona = document.querySelector(".funciona");


power.addEventListener("mouseover", function iluminar(){
    h1.style.color =  'white';
    h1.style.textShadow = `
        0 0 5px #ffffff,
        0 0 15px #ffffff,
        0 0 30px #00aaff,
        0 0 50px #00aaff
        `;
    pulsa.style.color =  'white';
    pulsa.style.textShadow = `
        0 0 5px #ffffff,
        0 0 15px #ffffff,
        0 0 30px #00aaff,
        0 0 50px #00aaff
        `;
    funciona.style.color =  'white';
    funciona.style.textShadow = `
        0 0 5px #ffffff,
        0 0 15px #ffffff,
        0 0 30px #00aaff,
        0 0 50px #00aaff
        `;
})

power.addEventListener("mouseleave", function quitarLuz(){
     h1.style.color =  'grey';
    h1.style.textShadow = "";
    pulsa.style.color =  'grey';
    pulsa.style.textShadow = "";
    funciona.style.color =  'red';
    funciona.style.textShadow = "";
})
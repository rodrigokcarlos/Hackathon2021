
const verde10 = document.querySelector('.cupon-verde10');
const verde30 = document.querySelector('.cupon-verde30');
const verde45 = document.querySelector('.cupon-verde45');
const caixaCupom1 = document.querySelector('.corpo-cupons1');
const caixaCupom2 = document.querySelector('.corpo-cupons2');
const caixaCupom3 = document.querySelector('.corpo-cupons3');
const div = [verde10, verde30, verde45];


verde10.addEventListener('click', () =>{
     verde10.innerHTML = `<div class="cupom-codigo"><p>Código de Cupom</p><div class='cupom'>VERDE10</div></div>`;
     verde10.style.backgroundColor = "#fdfdfd";
     caixaCupom1.style.height = "100px";
})
verde30.addEventListener('click', () =>{
     verde30.innerHTML = `<div class="cupom-codigo"><p>Código de Cupom</p><div class='cupom'>VERDE30</div></div>`;
     verde30.style.backgroundColor = "#fdfdfd";
     caixaCupom2.style.height = "100px";
})
verde45.addEventListener('click', () =>{
     verde45.innerHTML = `<div class="cupom-codigo"><p>Código de Cupom</p><div class='cupom'>VERDE45</div></div>`;
     verde45.style.backgroundColor = "#fdfdfd";
     caixaCupom3.style.height = "100px";
})




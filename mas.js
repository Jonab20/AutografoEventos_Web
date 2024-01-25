const btnLeft = document.querySelector('.btn-left'),
btnRight = document.querySelector('.btn-right'),
slider = document.querySelector('#slider'),
sliderSection = document.querySelectorAll('.slider-section');

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => { /*mover automaticamente el carusel hacia la izquierda cada 5 segundos.*/ 
    moveToRight();
}, 5000)

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if ( counter >= sliderSection.length - 1 ) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";

}

function moveToLeft() {
    counter--;
    if ( counter < 0 ) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}


// var counter = 1;

// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000);



// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })
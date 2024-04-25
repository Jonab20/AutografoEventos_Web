// const btnLeft = document.querySelector('.btn-left'),
// btnRight = document.querySelector('.btn-right'),
// slider = document.querySelector('#slider'),
// sliderSection = document.querySelectorAll('.slider-section');

// btnLeft.addEventListener("click", e => moveToLeft())
// btnRight.addEventListener("click", e => moveToRight())

/*mover automaticamente el carusel hacia la izquierda cada 5 segundos.*/ 
// setInterval(() => { 
//     moveToRight();
// }, 5000)


// let operacion = 0,
//     counter = 0,
//     widthImg = 100 / sliderSection.length;

// function moveToRight() {
//     if ( counter >= sliderSection.length - 1 ) {
//         counter = 0;
//         operacion = 0;
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "none";
//         return;
//     }
//     counter++;
//     operacion = operacion + widthImg;
//     slider.style.transform = `translate(-${operacion}%)`;
//     slider.style.transition = "all ease .6s";

// }

// function moveToLeft() {
//     counter--;
//     if ( counter < 0 ) {
//         counter = sliderSection.length - 1;
//         operacion = widthImg * (sliderSection.length - 1);
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "none";
//         return;
//     } 
//     operacion = operacion - widthImg;
//     slider.style.transform = `translate(-${operacion}%)`;
//     slider.style.transition = "all ease .6s";
// }

/*Termina la automatización para el Carusel*/






/*Enviar datos al mail mediante el formulario.*/
// const btn = document.getElementById('button');

// document.getElementById('form').addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Enviando...';

//    const serviceID = 'service_3dmi066';
//    const templateID = 'template_t5v4k8l';
//    //const apiKey = 'PEx33QalUroQBy-AA';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Enviar Email'; /*'Send Email'*/
//       alert('Sent!');
//     }, 
//     (err) => {
//       btn.value = 'Enviar Email'; /*'Send Email'*/
//       alert(JSON.stringify(err));
//     });
// });


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_3dmi066';  /*'default_service';*/
   const templateID = 'template_t5v4k8l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
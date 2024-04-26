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



/* VALIDAR SE COMPLETEN LOS CAMPOS ANTES DE ENVIAR EL FORMULARIO*/
const nombre = document.getElementById("from_name");
const asunto = document.getElementById("subject");
const email = document.getElementById("email_id");
const mensaje = document.getElementById("message");
const formu = document.getElementById("form");
const parrafo = document.getElementById("advertencia");


const btn = document.getElementById('button');    /*original aca*/

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();


   let adver = "";
   let entrar = false;
   let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   /*ayuda a validar los caracteres del email*/
   parrafo.innerHTML = "";

   if ( btn.click && nombre.value.length <= 3 ) {
    adver += 'El nombre y apellido es corto <br>';
    entrar = true;
   }

   if ( btn.click && !regexEmail.test(email.value) ) {
    adver += 'Al email no le falta el @ y/o el .com <br>';
    entrar = true;
   }

   if ( btn.click && mensaje.value.length <= 4 ) {
    adver += 'El mensaje es corto <br>';
    entrar = true;
   }

   if ( entrar ) {
    parrafo.innerHTML = adver;
   }

   if ( nombre.value.length > 3 && regexEmail.test(email.value) && mensaje.value.length > 4) {

    btn.value = 'Enviando...';

    const serviceID = 'service_3dmi066';  /*'default_service';*/
    const templateID = 'template_t5v4k8l';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar'; /*'Send Email'*/
      /*alert('Enviado!'); ('Sent!');    MEnsaje de que se envio el FORMULARIO*/ 
      limpiarForm ();

    }, (err) => {
      btn.value = 'Enviar'; /*'Send Email'*/
      alert(JSON.stringify(err));  /*Mensaje en caso de Error al tratar de Enviar el formulario*/
    });


    function limpiarForm () { /*Limpia el formulario una vez Enviado*/
    form.reset();
    }

   }

   

   
});




/* Envio del formulario*/
// const btn = document.getElementById('button');    /*original aca*/

// document.getElementById('form').addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Enviando...';

//    const serviceID = 'service_3dmi066';  /*'default_service';*/
//    const templateID = 'template_t5v4k8l';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Enviar'; /*'Send Email'*/
//       /*alert('Enviado!'); ('Sent!');    MEnsaje de que se envio el FORMULARIO*/ 
//       limpiarForm ();

//     }, (err) => {
//       btn.value = 'Enviar'; /*'Send Email'*/
//       alert(JSON.stringify(err));  /*Mensaje en caso de Error al tratar de Enviar el formulario*/
//     });
// });

// function limpiarForm () { /*Limpia el formulario una vez Enviado*/
//     form.reset();
// }
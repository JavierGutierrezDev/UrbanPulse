//cuando el HTML estñe cargado completamente y envie el documento al js ejecuta el resto del código
$(document).ready(function(){
//Inicialización de los popovers de boostrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



});


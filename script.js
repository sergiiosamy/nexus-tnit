function enviarWhatsApp(){

let nombre = document.getElementById("nombre").value;
let telefono = document.getElementById("telefono").value;
let marca = document.getElementById("marca").value;
let modelo = document.getElementById("modelo").value;
let anio = document.getElementById("anio").value;

let servicio = document.getElementById("servicio").value;
let polarizado = document.getElementById("polarizado").value;
let fecha = document.getElementById("fecha").value;
let hora = document.getElementById("hora").value;

let mensaje = `Hola quiero agendar:

Nombre: ${nombre}
Teléfono: ${telefono}
Vehículo: ${marca} ${modelo} ${anio}

Servicio: ${servicio}
Polarizado: ${polarizado}

Fecha: ${fecha}
Hora: ${hora}`;

window.open("https://wa.me/12244910412?text=" + encodeURIComponent(mensaje));

}

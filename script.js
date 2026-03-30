function enviarWhatsApp(){

  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let vehiculo = document.getElementById("vehiculo").value;
  let servicio = document.getElementById("servicio").value;
  let polarizado = document.getElementById("polarizado").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;

  let mensaje = `Hola, quiero agendar una cita:
Nombre: ${nombre}
Teléfono: ${telefono}
Vehículo: ${vehiculo}
Servicio: ${servicio}
Polarizado: ${polarizado}
Fecha: ${fecha}
Hora: ${hora}`;

  window.open("https://wa.me/12244910412?text=" + encodeURIComponent(mensaje));
}

function cambiarIdioma(idioma){
  document.querySelectorAll("[data-es]").forEach(el=>{
    el.innerText = el.getAttribute("data-" + idioma);
  });
}

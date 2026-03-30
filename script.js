const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

function cambiarIdioma(idioma){
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-es][data-en]").forEach(el => {
    const texto = el.getAttribute(`data-${idioma}`);
    if (texto) {
      el.textContent = texto;
    }
  });

  document.querySelectorAll("[data-es-ph][data-en-ph]").forEach(el => {
    const placeholder = el.getAttribute(`data-${idioma}-ph`);
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });

  document.querySelectorAll("option[data-es][data-en]").forEach(el => {
    const texto = el.getAttribute(`data-${idioma}`);
    if (texto) {
      el.textContent = texto;
    }
  });

  btnEs.classList.toggle("active", idioma === "es");
  btnEn.classList.toggle("active", idioma === "en");
}

btnEs.addEventListener("click", () => cambiarIdioma("es"));
btnEn.addEventListener("click", () => cambiarIdioma("en"));

function enviarWhatsApp(){
  const idioma = document.documentElement.lang || "es";

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const anio = document.getElementById("anio").value;
  const servicio = document.getElementById("servicio").value;
  const polarizado = document.getElementById("polarizado").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const comentario = document.getElementById("comentario").value;

  let mensaje = "";

  if (idioma === "en") {
    mensaje = `Hello, I want to schedule an appointment:

Name: ${nombre}
Phone: ${telefono}
Vehicle: ${marca} ${modelo} ${anio}
Service: ${servicio}
Tint: ${polarizado}
Date: ${fecha}
Time: ${hora}
Comment: ${comentario}`;
  } else {
    mensaje = `Hola, quiero agendar una cita:

Nombre: ${nombre}
Teléfono: ${telefono}
Vehículo: ${marca} ${modelo} ${anio}
Servicio: ${servicio}
Polarizado: ${polarizado}
Fecha: ${fecha}
Hora: ${hora}
Comentario: ${comentario}`;
  }

  window.open("https://wa.me/12244910412?text=" + encodeURIComponent(mensaje), "_blank");
}

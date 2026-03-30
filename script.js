const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

function cambiarIdioma(idioma){
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    const text = el.getAttribute(`data-${idioma}`);
    if (text) {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-es-ph][data-en-ph]").forEach((el) => {
    const ph = el.getAttribute(`data-${idioma}-ph`);
    if (ph) {
      el.placeholder = ph;
    }
  });

  document.querySelectorAll("option[data-es][data-en]").forEach((el) => {
    const text = el.getAttribute(`data-${idioma}`);
    if (text) {
      el.textContent = text;
    }
  });

  btnEs.classList.toggle("active", idioma === "es");
  btnEn.classList.toggle("active", idioma === "en");
}

btnEs.addEventListener("click", () => cambiarIdioma("es"));
btnEn.addEventListener("click", () => cambiarIdioma("en"));

function enviarWhatsApp(){
  const idioma = document.documentElement.lang || "es";

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const anio = document.getElementById("anio").value.trim();
  const servicio = document.getElementById("servicio").value;
  const polarizado = document.getElementById("polarizado").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const comentario = document.getElementById("comentario").value.trim();

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

cambiarIdioma("es");

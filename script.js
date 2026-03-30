function enviarWhatsApp(){
  const idioma = document.documentElement.lang || "es";

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const vehiculo = document.getElementById("vehiculo").value;
  const servicio = document.getElementById("servicio").value;
  const polarizado = document.getElementById("polarizado").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const comentarios = document.getElementById("comentarios").value;

  if (!nombre || !telefono || !vehiculo || !fecha || !hora) {
    if (idioma === "es") {
      alert("Por favor completa nombre, teléfono, vehículo, fecha y hora.");
    } else {
      alert("Please complete name, phone, vehicle, date and time.");
    }
    return;
  }

  let mensaje = "";

  if (idioma === "es") {
    mensaje = `Hola, quiero agendar una cita en NEXUS TINT:

Nombre: ${nombre}
Teléfono: ${telefono}
Vehículo: ${vehiculo}
Servicio: ${servicio}
Polarizado: ${polarizado}
Fecha: ${fecha}
Hora: ${hora}
Comentarios: ${comentarios || "Sin comentarios"}`;
  } else {
    mensaje = `Hello, I want to schedule an appointment at NEXUS TINT:

Name: ${nombre}
Phone: ${telefono}
Vehicle: ${vehiculo}
Service: ${servicio}
Tint: ${polarizado}
Date: ${fecha}
Time: ${hora}
Comments: ${comentarios || "No comments"}`;
  }

  window.open("https://wa.me/12244910412?text=" + encodeURIComponent(mensaje), "_blank");
}

function cambiarIdioma(idioma){
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-es][data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${idioma}`);
  });

  document.querySelectorAll("[data-es-ph][data-en-ph]").forEach(el => {
    el.placeholder = el.getAttribute(`data-${idioma}-ph`);
  });

  document.querySelectorAll("select option").forEach(el => {
    if (el.dataset.es && el.dataset.en) {
      el.textContent = el.getAttribute(`data-${idioma}`);
    }
  });

  document.getElementById("btn-es").classList.toggle("active", idioma === "es");
  document.getElementById("btn-en").classList.toggle("active", idioma === "en");
}

document.getElementById("btn-es").addEventListener("click", () => cambiarIdioma("es"));
document.getElementById("btn-en").addEventListener("click", () => cambiarIdioma("en"));

function mostrarSeccion(id) {

    var secciones = document.querySelectorAll('section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });


    var seccionAMostrar = document.getElementById(id);
    seccionAMostrar.style.display = 'block';
}

function mostrarAlert() {
    document.getElementById("miAlert").style.display = "block";
  }
  function cerrarAlert() {
    document.getElementById("miAlert").style.display = "none";
}


function enviarCorreo() {
    var email = 'carmen.tandemaran@gmail.com';
    window.location.href = 'mailto:' + email;
}

function enviarMensaje() {
    var numero = '664637891'; 
    window.location.href = 'https://wa.me/' + numero;
}

function irALinkedin() {
    window.location.href = 'https://www.linkedin.com/in/tu-perfil-de-linkedin';
}



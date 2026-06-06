const boton = document.getElementById("modo-oscuro");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    boton.textContent = "☀️";
}

boton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");
        boton.textContent = "☀️";

    }else{

        localStorage.setItem("theme", "light");
        boton.textContent = "🌙";

    }

});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Inicializar EmailJS
(function () {
    emailjs.init({
        publicKey: "AEE-prpuK76Fd-a2D",
    });
})();

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_8suwozz", "template_b2acaa7", {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    })
    .then((response) => {
        console.log("Éxito:", response);
        alert("Mensaje enviado correctamente");
        formulario.reset();
    })
    .catch((error) => {
        console.error("Error EmailJS:", error);
        alert("Error al enviar el mensaje");
    });
});
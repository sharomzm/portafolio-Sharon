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
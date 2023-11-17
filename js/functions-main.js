const nav = document.querySelector("#navbar");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");

//header
abrir.addEventListener("click",()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible");
})

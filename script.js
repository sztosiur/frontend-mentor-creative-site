const navToggle = document.querySelector(".nav-btn");

const navMobile = document.querySelector(".main-nav");




navToggle.addEventListener("click", () =>{
    navMobile.classList.toggle("active");
})

document.querySelectorAll(".main-nav-link").forEach(n => n.addEventListener("click", () => {
    navMobile.classList.remove("active");
} ))



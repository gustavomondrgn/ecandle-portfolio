/* Hamburguer */

$(document).ready(function(){
    $(".menu-burger").click(function(){
        $(this).toggleClass("active");
        $(".nav-menu").toggleClass("active");
    });
});

const a = document.createElement("a");
const listProduct = document.querySelector(".listagem-item");

a.href = "wa.me/numero";
a.classList.add("btn-cta-whats");

listProduct.insertAdjacentHTML("afterbegin", a);

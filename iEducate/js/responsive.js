burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
    navbar.classList.toggle("hNavResp");
    navlist.classList.toggle("visibilityResp");
    rightnav.classList.toggle("visibilityResp");
});
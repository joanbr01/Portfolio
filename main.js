
// Scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scrolled', window.scrollY > 0);
})

// Hamburger Menu

const nav = document.querySelector(".nav_links");
const openNavBtn = document.querySelector(".nav_toggle_btn");
const closeNavBtn = document.querySelector(".nav_close_btn");


const openNav = () => {
    nav.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
}
openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
}
closeNavBtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach(navLink => {
    navLink.addEventListener("click", closeNav);
});
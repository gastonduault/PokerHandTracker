// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar



/*--------------Menu & changement de page-------*/
const body = document.body;
//const bgColorsBody = [/*"#ffb457"*/ "#8CE699", "#DB93F0", "#ffe797" /*"#9999fb"*/];
const bgColorsBody = ["#3A3680","#804842","#9C8C32"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
let activeItem = menu.querySelector(".active");


function clickItem(item, index) {
 menu.style.removeProperty("--timeOut");
    if (activeItem === item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    
}

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    menu.style.setProperty("--timeOut", "none");
});


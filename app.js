// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

/*--------------Menu & changement de page-------*/
const body = document.body;
//const bgColorsBody = [/*"#ffb457"*/ "#8CE699", "#DB93F0", "#ffe797" /*"#9999fb"*/];
const bgColorsBody = ["#3A3680","#804842","#9C8C32"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
let activeItem = menu.querySelector(".active");

const page = body.querySelectorAll(".page"); 

function clickItem(item, index) {
 menu.style.removeProperty("--timeOut");
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    page.forEach(x => {
        x.style.display = "none";
    });
    page[index].style.display = "block";
}

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    menu.style.setProperty("--timeOut", "none");
});


/*--------------burger liste carte--*/
const burger = document.querySelector(".zoneClickCarte1");
const listCarte = document.querySelector(".listCarte1");

burger.addEventListener('click', () => {
    listCarte.classList.toggle("active");
});

//const cartes = document.querySelectorAll('.cartes2','.cartes3','.cartes4','.cartes5','.cartes6','.cartes7','.cartes8','.cartes9','.cartes10','.cartesV','.cartesQ','.cartesK','.cartesA');
const cartes = listCarte.querySelectorAll(".cartes");
let carteSelect = menu.querySelector(".select");
function choixCarte(item){
    if(carteSelect == item) return;
    else if(carteSelect){
        carteSelect.classList.remove("active")
    }
    item.classList.toggle("select");
}
cartes.forEach((item,index) => {
    item.addEventListener('click', () => choixCarte(item));
})

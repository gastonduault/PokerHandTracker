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
const listCarte = document.querySelector(".listCarte1");
const cartes = listCarte.querySelectorAll(".cartes");
const cartesS = listCarte.querySelectorAll(".carteS");

function cardClear(){
    cartes.forEach((item)=>{
        item.classList.remove("select");
    });
}


function choixCarte(index){
    listCarte.style.height='auto';
    let carteSelect = listCarte.querySelector(".select");
    if(cartes[index] == carteSelect){
        carteSelect.classList.remove("select");
    }else{
        cardClear();
        cartes[index].classList.toggle("select");
    }
}
cartesS.forEach((item, index) => {
    item.addEventListener('click', () => choixCarte(index));
})

function heightClose(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 30 + 'px';
    });
  });
}

function heightOpen(element) {
    /*var sectionHeight = element.scrollHeight;

    var elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function() {
        element.style.height = 'auto';
        element.style.transition = elementTransition;
        requestAnimationFrame(function() {
            element.style.height = 'auto';
        });
  });*/
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);

    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
    });
}

document.querySelector(".zoneClickCarte1").addEventListener('click', function(e){
    listCarte.classList.toggle("open");
    var isOpen = document.querySelector(".open") === listCarte;
    if(isOpen){
        heightOpen(listCarte);
    }else{
        heightClose(listCarte);
    }
});
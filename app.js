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


/*--------------liste carte--*/
const cartes = page[0].querySelectorAll(".cartes");
const cartesS = page[0].querySelectorAll(".carteS");
const listCarte = page[0].querySelectorAll(".listCarte");

let listeCarteClick = -1;

function cardClear(){
    cartes.forEach((item)=>{
        item.classList.remove("select");
    });
}

listCarte.forEach((item,index) => {
    item.addEventListener("mouseenter", () => {listeCarteClick=index;});
})


function choixCarte(index){
    listCarte[listeCarteClick].style.height='auto';
    let carteSelect = page[0].querySelector(".select");
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


function heightClose(element,x) {
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
      element.style.height = x + 'px';
    });
  });
}

function heightOpen(element) {
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

const zoneClicklisteCarte = page[0].querySelectorAll(".zoneClickCarte");

zoneClicklisteCarte.forEach((item,index) => {
    item.addEventListener('click', () => ClickBurgerCarte(item,index));
});

function ClickBurgerCarte(item,index){
    listCarte[index].classList.toggle("open");

    if(listCarte[index].classList.contains("open")){
        console.log(1);
        heightOpen(listCarte[index]);
    }else{
        if(listCarte[index].classList.contains("carteSelect")){
            console.log(2);
            heightClose(listCarte[index],50);
        }else{
            console.log(3);
            heightClose(listCarte[index],30);
        }
    }
}

const imgCarte1 = page[0].querySelectorAll(".imgCartes1");
const tabSigne = Array('H','C','D','S');
const tabCardNumber = Array('2','3','4','5','6','7','8','9','10','J','Q','K','A');
const burger = page[0].querySelector('.burgerListeCarte');

function selectCard(item,index){
    if(index>51) index-=52;
    console.log(index);
    var carte = (tabCardNumber[Math.trunc(index/4)])+tabSigne[index%4];
    var txtCarte = page[0].querySelectorAll('.txtCarte');
    var carteHTML="<img src=\"images/"+carte+".JPG\" height=\"50px\" style=\"border-radius:3px 3px;\">";
    txtCarte[listeCarteClick].innerHTML = carteHTML;
    if(!listCarte[listeCarteClick].classList.contains("carteSelect")){
        listCarte[listeCarteClick].classList.toggle('carteSelect');
    }
    heightClose(listCarte[listeCarteClick],50);
    listCarte[listeCarteClick].classList.toggle("open");
}

imgCarte1.forEach((item,index) => {
    item.addEventListener('click', () => selectCard(item,index));
})
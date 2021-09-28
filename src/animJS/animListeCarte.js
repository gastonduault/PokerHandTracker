const root = document.getElementById('root');

let cartes;
let cartesS;
let listCarte = document.querySelectorAll('.listCard');
let zoneClicklisteCarte;
let listeCarteClick = -1;
let imgCarte1;
// eslint-disable-next-line no-array-constructor
let tabSigne = Array('H','C','D','S');
// eslint-disable-next-line no-array-constructor
let tabCardNumber = Array('2','3','4','5','6','7','8','9','10','J','Q','K','A');

let init = false;


root.addEventListener('mouseenter', () => {
    cartes = root.querySelectorAll(".cartes");
    cartesS = root.querySelectorAll(".carteS");
    listCarte = root.querySelectorAll(".listCard");
    imgCarte1 = root.querySelectorAll(".imgCartes1");
    zoneClicklisteCarte = root.querySelectorAll(".zoneClickCard");
    
    if(!init){   
        zoneClicklisteCarte.forEach((item,index) => {
            item.addEventListener('click', () => ClickBurgerCarte(index));
        })
        cartesS.forEach((item, index) => {
            item.addEventListener('click', () => choixCarte(index));
        })
        imgCarte1.forEach((item,index) => {
            item.addEventListener('click', () => selectCard(item,index));
        })
    }

    listCarte.forEach((item,index) => {
        item.addEventListener("click", () => {listeCarteClick=index;console.log(index)});
    })

    init=true;
});


function cardClear(){
    cartes.forEach((item)=>{
        item.classList.remove("select");
    });
}


function choixCarte(index){
    console.log("liste #",listeCarteClick);
    listCarte[listeCarteClick].style.height='auto';
    let carteSelect = document.querySelector(".select");
    if(cartes[index] === carteSelect){
        carteSelect.classList.remove("select");
    }else{
        cardClear();
        cartes[index].classList.toggle("select");
    }
}


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

function ClickBurgerCarte(index){
    listCarte[index].classList.toggle("open");
    if(listCarte[index].classList.contains("open")){
        console.log("ouverture liste");
        heightOpen(listCarte[index]);
    }else{
        if(listCarte[index].classList.contains("carteSelect")){
            console.log("carte selectionné");
            heightClose(listCarte[index],50);
        }else{
            console.log("fermeture liste");
            heightClose(listCarte[index],30);
        }
    }
}


function selectCard(item,index){
    //if(index>51) index-=52;
    //var carte = (tabCardNumber[Math.trunc(index/4)])+tabSigne[index%4];
    var txtCarte = document.querySelectorAll('.txtCard');
    var carteHTML="<img src=\""+item.src+"\" height=\"50px\" style=\"border-radius:3px 3px;\">";
    txtCarte[listeCarteClick].innerHTML = carteHTML;
    if(!listCarte[listeCarteClick].classList.contains("carteSelect")){
        listCarte[listeCarteClick].classList.toggle('carteSelect');
    }
    heightClose(listCarte[listeCarteClick],50);
    listCarte[listeCarteClick].classList.toggle("open");
}


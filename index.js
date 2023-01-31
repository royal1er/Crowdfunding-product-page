
var received = 89914;

setTimeout(progressBar(), 0);

function progressBar() {
  var total = 100000;
  var sum = 100*received/total;
  var somme = Math.round(sum);
  var bars = document.getElementById('progress');
  bars.setAttribute("data-percent", sum.toString());
  var dars = document.getElementsByClassName('progress-bar__slide');
  console.log(somme);
  dars[0].style.width= somme+"%";


};


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
var btnMod = document.getElementsByClassName('openModal');

span.onclick = function(){
  modal.style.display = "none";
};

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
};


/*========================================*/
var inputData = document.getElementsByClassName('input-value');
var modalCompleted = document.getElementById('modal_completed');


document.addEventListener('click', (e) => {
  if(e.target.classList.contains('confirmData')){
    const items = Array.from(document.querySelectorAll('.confirmData'));
    let index = items.indexOf(e.target);
    let value = inputData[index].value;
    let number = value.replace('$', '');
    let backed = document.getElementById("numberofbacked");
    let removedollars = backed.textContent.replace('$', '');
    let removecomma = removedollars.replace(',', '');
    let result = parseInt(removecomma) + parseInt(number);
    backed.innerHTML = `${result}`;
    received = result;
    /*======*/
    let myarticles = document.getElementsByClassName("article")[index];
    let articles = myarticles.querySelector('#left_article');
    let article = articles.textContent;
    let soldedarticle = article.replace(' left', '');
    let soustraction = parseInt(soldedarticle);
    let resultsoustraction = soustraction-1;
    articles.innerHTML = `<a>${resultsoustraction}</a> left`
    console.log(articles);
    /*======*/
    let mymodalorder = document.getElementsByClassName("modal-order")[index+1];
    let mymodalorders = mymodalorder.querySelector('#left');
    let mymodal = mymodalorders.textContent;
    let modalsoldedarticle = mymodal.replace(' left', '');
    let modalsoustraction = parseInt(modalsoldedarticle);
    let resultsoustmodal = modalsoustraction-1;
    mymodalorders.innerHTML = `<a>${resultsoustmodal}</a> left`
    console.log(mymodalorders);
    modal.style.display = "none";
    modalCompleted.style.display = "block";
    setTimeout(progressBar(), 0);
  }
});


var gotit = document.getElementById('gotit');
gotit.onclick = function () {
    console.log(inputData);
    modalCompleted.style.display = "none";
   
}


var checkvalue = document.getElementsByClassName("radio-order");
var checkmodal = document.getElementsByClassName("modal-order");



function logConsole(){
  for (var i = 0; i < checkvalue.length; i++) {
  if(checkvalue[i].checked == true){
    checkmodal[i].lastElementChild.setAttribute("style","display:grid")
    }else{
    checkmodal[i].lastElementChild.setAttribute("style","display:none")
  }
}
};

var widerScreenWidth = window.matchMedia("(max-width: 786px)");
let menu = document.getElementById("imghamb");
let menunav = document.getElementsByClassName("modalmenu")[0];

if(window.innerWidth < 830 ){
  menu.style.display = "block";
}


menu.addEventListener("click",function(){
    
  if(menu.innerHTML ==`<img src="./images/icon-hamburger.svg" alt="menu">`){
    menu.innerHTML = `<img src="./images/icon-close-menu.svg" alt="menu">`;
    menunav.style.display = "block";
  }else{
    menu.innerHTML = `<img src="./images/icon-hamburger.svg" alt="menu">`;
    menunav.style.display = "none";
  }
})

let myarticles = document.getElementsByClassName("article");
for (var i = 0; i < myarticles.length; i++) {
  console.log(myarticles[i].querySelector('#left_article'));
  let articles = myarticles[i].querySelector('#left_article');
  let article = articles.textContent;
  console.log(article);
  let soldedarticle = article.replace(' left', '');
  console.log(soldedarticle);
  if(parseInt(soldedarticle)==0){
    console.log(myarticles[i]);
    myarticles[i].style.filter = "grayscale(95%)";
    let modaltodelete = document.getElementsByClassName("openModal");
    modaltodelete[i].classList.remove("openModal");
  }
}

/*=========================================*/
for (var i = 0; i < btnMod.length; i++) {
  btnMod[i].onclick = function(){
    modal.style.display = "block";
  }
};

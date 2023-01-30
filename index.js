
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

/*=========================================*/
for (var i = 0; i < btnMod.length; i++) {
  btnMod[i].onclick = function(){
    modal.style.display = "block";
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


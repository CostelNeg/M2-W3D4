//Esercizio 7

function changeH1() {
  document.getElementById("titolo").innerHTML = "ciao2";
}

//Esercizio 8

function colorChangeBody() {
  document.body.style.backgroundColor = "red";
}

// Esercizio 9
function changeAddress() {
  document.querySelector(".ShopAddress").innerHTML = " Via Maremma";
}

//Esercizio 10
function addClass() {
  const nuovaClasse = document.querySelector(".imagine");
  nuovaClasse.classList.add("nascondi");
}

//Esercizio 11
function addRemoveAll() {
  const listaElementi = document.querySelectorAll(".imagine");
  for(const elemento of listaElementi){
    elemento.classList.toggle('Belli')
  }
}

//Esercizio 12

  function randomColor(){
    const red=Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue= Math.round(Math.random() *255)
    return (red+green+blue)
  }
  function changeColor (){
    const listaElementi=document.querySelectorAll('.price')
    for(const elemento of listaElementi){
      elemento.style.backgroundColor=randomColor()
    }
  }
 



//BOTTONI
const btnGenera = document.getElementById("genera");

//MAIN
const main = document.getElementById("main");

//EVENTO bottone START cliccato
btnGenera.addEventListener("click", function(){
  //creo il container
  const container = document.createElement("div");
  container.className = "container";
  main.appendChild(container);

  //ciclo per generare i box all'interno del container
  for (let i = 0; i < 100; i++){
  const box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
  }

  //elimino il bottone
  btnGenera.className = "hide";
})


//PROBLEMA: il box non viene visto al di fuori dell ciclo 
//EVENTO click sulla casella
box.addEventListener("click", function(){
  //coloro la casella aggiungendo una classe
  box.className = "active"
})


//-------------------------FUNCTIONS-----------------------------------

function createDiv (){
  //credo sia meglio creare una funzione che crea il div e me lo inserisce nell'html dato che eseguo questa azione più di una volta;
}









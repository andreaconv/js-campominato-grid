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
  for (let i = 1; i <= 100; i++){
  const box = document.createElement("div");
  box.className = "box";

  //EVENTO click sul BOX
  box.addEventListener("click", function(){
  //coloro la casella aggiungendo una classe
  // FIXME:box.classList.add("active");
  //con la proprità toggle aggiunge o rimuove una classe
  box.classList.toggle("active")
  console.log(box.innerText = i);

  })


  container.appendChild(box);
  }

  //elimino il bottone
  btnGenera.className = "hide";
})





//-------------------------FUNCTIONS-----------------------------------

function createDiv (){
  //credo sia meglio creare una funzione che crea il div e me lo inserisce nell'html dato che eseguo questa azione più di una volta;
}










//BOTTONI
const btnGenera = document.getElementById("genera");

//MAIN
const main = document.getElementById("main");

//EVENTO bottone cliccato
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












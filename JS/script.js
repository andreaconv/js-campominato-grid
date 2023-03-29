//BOTTONI
const btnGenera = document.getElementById("genera");

//CONTAINER
const container = document.querySelector(".container");

//ciclo per generare i box all'interno del container
for (let i = 0; i < 100; i++){
  const box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}


btnGenera.addEventListener("click", function(){
  console.log("mi hai cliccato");
})









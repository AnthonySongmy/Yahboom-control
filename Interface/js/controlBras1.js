var R3UP = document.getElementById("R3-UP");
var R3DOWN = document.getElementById("R3-DOWN");
var R3s1 = document.getElementById("R3-s1");
var R3s2 = document.getElementById("R3-s2");

R3UP.addEventListener("click", function(){
	fetch('http://127.0.0.1:5000/back')
	.then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'api pour avancer le robot');
      }
	})
	 .catch(error => {
      console.error(error);
    });
});

R3DOWN.addEventListener("click", function(){
	fetch('http://127.0.0.1:5000/advance')
	.then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'api pour reculer le robot');
      }
  })
  .catch(error => {
      console.error(error);
    });
});

R3s1.addEventListener("click", function(){
  fetch('http://127.0.0.1:5000/s1')
  .then(response=>{
    if(!response.ok){
      throw new Error('Erreur lors de l\'appel de l\'api pour le premier scenario');
      
    }
  })
  .catch(error=>{
    console.error(error)
  });
});

R3s2.addEventListener("click", function(){
  fetch('http://127.0.0.1:5000/s2')
  .then(response=>{
    if(!response.ok){
      throw new Error('Erreur lors de l\'appel de l\'api pour le deuxieme scenario');
    }
  })
  .catch(error=>{
    console.error(error)
  });
});

async function lire(){
  try{
    const response = await fetch('http://127.0.0.1:5000/robot')
    const data = await response.json()
    document.getElementById("position-robot-depart").innerHTML = JSON.stringify(data, null, 2);
}catch(error){
  console.error(error)
}}

window.addEventListener('load', () => {
  setInterval(lire,1000);
});
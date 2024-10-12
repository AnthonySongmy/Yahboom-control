// récupérer les éléments de bouton du DOM
var R1UPM1 = document.getElementById("R1-UPM1");
var R1UPM2 = document.getElementById("R1-UPM2");
var R1UPM3 = document.getElementById("R1-UPM3");
var R1UPM4 = document.getElementById("R1-UPM4");
var R1UPM5 = document.getElementById("R1-UPM5");
var R1UPM6 = document.getElementById("R1-UPM6");
var R1DOWNM1 = document.getElementById("R1-DOWNM1");
var R1DOWNM2 = document.getElementById("R1-DOWNM2");
var R1DOWNM3 = document.getElementById("R1-DOWNM3");
var R1DOWNM4 = document.getElementById("R1-DOWNM4");
var R1DOWNM5 = document.getElementById("R1-DOWNM5");
var R1DOWNM6 = document.getElementById("R1-DOWNM6");
var R1stop = document.getElementById("R1-stop");
var R1start = document.getElementById("R1-start");
var R1s1 = document.getElementById("R1-s1");




R1s1.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/depart/s1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
		  document.getElementById(`position-robot-depart`).innerText = "en cours de mvt";
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-depart`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });

});

R1start.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/depart/start`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-depart`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });

});

R1stop.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/depart/exit`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-depart`).innerText = "-";
    })
    .catch(error => {
      console.error(error);
    });

});

// ajouter des gestionnaires d'événements de clic aux boutons
R1UPM1.addEventListener("click", function() {
    decrementServoPosition("depart","m1");

});
R1DOWNM1.addEventListener("click", function() {
	  incrementServoPosition("depart","m1");

});

R1UPM2.addEventListener("click", function() {
  incrementServoPosition("depart","m2");
});
R1DOWNM2.addEventListener("click", function() {
  decrementServoPosition("depart","m2");
});

R1UPM3.addEventListener("click", function() {
  incrementServoPosition("depart","m3");
});
R1DOWNM3.addEventListener("click", function() {
  decrementServoPosition("depart","m3");
});

R1UPM4.addEventListener("click", function() {
  incrementServoPosition("depart","m4");
});
R1DOWNM4.addEventListener("click", function() {
  decrementServoPosition("depart","m4");
});

R1UPM5.addEventListener("click", function() {
  incrementServoPosition("depart","m5");
});
R1DOWNM5.addEventListener("click", function() {
  decrementServoPosition("depart","m5");
});


R1UPM6.addEventListener("click", function() {
  incrementServoPosition("depart","m6");
});
R1DOWNM6.addEventListener("click", function() {
  decrementServoPosition("depart","m6");
});



// Fonction pour incrémenter la position d'un servo
function incrementServoPosition(bras, servo) {
  // Appel de l'API pour incrémenter la position du servo
  fetch(`http://192.168.0.240:5000/api/${bras}/up${servo}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-${bras}`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });
}

// Fonction pour décrémenter la position d'un servo
function decrementServoPosition(servo) {
  // Appel de l'API pour décrémenter la position du servo
  fetch(`http://192.168.0.240:5000/api/${bras}/down${servo}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour décrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-${bras}`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });
}
/*
// Ajout des écouteurs d'événements pour les boutons d'incrémentation et de décrémentation de chaque servo
document.querySelectorAll('.btn-increment').forEach(button => {
  button.addEventListener('click', () => {
    const servo = button.getAttribute('data-servo');
    incrementPosition(servo);
  });
});

document.querySelectorAll('.btn-decrement').forEach(button => {
  button.addEventListener('click', () => {
    const servo = button.getAttribute('data-servo');
    decrementPosition(servo);
  });
})*/
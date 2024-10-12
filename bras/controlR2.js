// récupérer les éléments de bouton du DOM
var R2UPM1 = document.getElementById("R2-UPM1");
var R2UPM2 = document.getElementById("R2-UPM2");
var R2UPM3 = document.getElementById("R2-UPM3");
var R2UPM4 = document.getElementById("R2-UPM4");
var R2UPM5 = document.getElementById("R2-UPM5");
var R2UPM6 = document.getElementById("R2-UPM6");
var R2DOWNM1 = document.getElementById("R2-DOWNM1");
var R2DOWNM2 = document.getElementById("R2-DOWNM2");
var R2DOWNM3 = document.getElementById("R2-DOWNM3");
var R2DOWNM4 = document.getElementById("R2-DOWNM4");
var R2DOWNM5 = document.getElementById("R2-DOWNM5");
var R2DOWNM6 = document.getElementById("R2-DOWNM6");
var R2stop = document.getElementById("R2-stop");
var R2start = document.getElementById("R2-start");
var R2s1 = document.getElementById("R2-s1");

R2s1.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/arrivee/s1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
		  document.getElementById(`position-robot-arrivee`).innerText = "en cours de mvt";
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-arrivee`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });

});

R2start.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/arrivee/start`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-arrivee`).innerText = data.result;
    })
    .catch(error => {
      console.error(error);
    });

});

R2stop.addEventListener("click", function() {
    fetch(`http://192.168.0.240:5000/api/arrivee/exit`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'appel de l\'API pour incrémenter la position du servo.');
      }
      // Récupération de la nouvelle position du servo
      return response.json();
    })
    .then(data => {
      // Affichage de la nouvelle position du servo
      document.getElementById(`position-robot-arrivee`).innerText = "-";
    })
    .catch(error => {
      console.error(error);
    });

});

// ajouter des gestionnaires d'événements de clic aux boutons
R2UPM1.addEventListener("click", function() {
    decrementServoPosition("arrivee","m1");

});
R2DOWNM1.addEventListener("click", function() {
	  incrementServoPosition("arrivee","m1");

});

R2UPM2.addEventListener("click", function() {
  incrementServoPosition("arrivee","m2");
});
R2DOWNM2.addEventListener("click", function() {
  decrementServoPosition("arrivee","m2");
});

R2UPM3.addEventListener("click", function() {
  incrementServoPosition("arrivee","m3");
});
R2DOWNM3.addEventListener("click", function() {
  decrementServoPosition("arrivee","m3");
});

R2UPM4.addEventListener("click", function() {
  incrementServoPosition("arrivee","m4");
});
R2DOWNM4.addEventListener("click", function() {
  decrementServoPosition("arrivee","m4");
});

R2UPM5.addEventListener("click", function() {
  incrementServoPosition("arrivee","m5");
});
R2DOWNM5.addEventListener("click", function() {
  decrementServoPosition("arrivee","m5");
});


R2UPM6.addEventListener("click", function() {
  incrementServoPosition("arrivee","m6");
});
R2DOWNM6.addEventListener("click", function() {
  decrementServoPosition("arrivee","m6");
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
function decrementServoPosition(bras, servo) {
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
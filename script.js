const heartStyles = ['\u2661', '\u2665']; // ♡ e ♥
let currentHeartSelection = 'random'; 

var Coracao = function(x, y) {
  this.inicializar(x, y);
};

Coracao.prototype = {
  inicializar: function(x, y) {
    this.elemento = document.createElement("span");
    this.elemento.className = "coracao";
    this.elemento.style.top = y + "px";
    this.elemento.style.left = x + "px";
    
    if (currentHeartSelection === 'random') {
      const randomIndex = Math.floor(Math.random() * heartStyles.length);
      this.elemento.innerText = heartStyles[randomIndex];
    } else {
      this.elemento.innerText = currentHeartSelection;
    }
  }
};

window.onload = function() {
  var tela = document.getElementById("tela");
  var mensagem = document.getElementById("mensagem-inicial");
  
  const settingsToggle = document.getElementById("settings-toggle");
  const settingsPanel = document.getElementById("settings-panel");
  const styleButtons = document.querySelectorAll(".style-btn");

  settingsToggle.onclick = function() {
    settingsPanel.classList.toggle("open");
  };

  styleButtons.forEach(button => {
    button.onclick = function(evento) {
      styleButtons.forEach(btn => btn.classList.remove("active"));
      evento.currentTarget.classList.add("active");
      currentHeartSelection = evento.currentTarget.dataset.heart;
    };
  });

  document.onclick = function(evento) {
    
    if (evento.target.closest("#settings-panel") || evento.target.closest("#settings-toggle")) {
      return;
    }
    
    if (mensagem) {
      mensagem.style.display = 'none';
      mensagem = null; 
    }

    var novoCoracao = new Coracao(evento.clientX, evento.clientY);
    tela.appendChild(novoCoracao.elemento);
  };
};

var Coracao = function(x, y) {
  this.inicializar(x, y);
};

Coracao.prototype = {
  inicializar: function(x, y) {
    this.elemento = document.createElement("span");
    this.elemento.className = "coracao";
    this.elemento.style.top = y + "px";
    this.elemento.style.left = x + "px";
    this.elemento.innerText = (Math.random() > 0.5) ? "\u2661" : "\u2665";
  }
};

window.onload = function() {
  var tela = document.getElementById("tela");
  var mensagem = document.getElementById("mensagem-inicial");

  document.onclick = function(evento) {
    
    if (mensagem) {
      mensagem.style.transition = "opacity 0.5s";
      mensagem.style.opacity = "0";
      setTimeout(() => {
        mensagem.remove();
      }, 500);
      mensagem = null; 
    }

    var novoCoracao = new Coracao(evento.clientX, evento.clientY);
    tela.appendChild(novoCoracao.elemento);
  };
};

let numero = 0;

function atualizar(){
  document.getElementById("contador").textContent = numero;
}

function aumentar(){
  numero++;
  atualizar();
}

function diminuir(){
  numero--;
  atualizar();
}

function resetar(){
  numero = 0;
  atualizar();
}
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("nomeInput");
    const button = document.getElementById("avaliarButton");
    const resultado = document.getElementById("resultado");
    const progressBar = document.getElementById("progressBar");
  
    button.addEventListener("click", function () {
      let nome = input.value.trim().toLowerCase();
      let nivelFalsidade;
  
      if (nome === "mariani") {
        nivelFalsidade = 100;
      } else if (nome === "rafael") {
        nivelFalsidade = 0;
      } else {
        nivelFalsidade = Math.floor(Math.random() * 101);
      }
  
      resultado.innerText = `${input.value} tem ${nivelFalsidade}% de falsidade!`;
      progressBar.value = nivelFalsidade;
    });
  });
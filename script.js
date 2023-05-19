//Funcao para alternar entre os modos noturno e diurno do site automaticamente de acordo com a hora
function verificarHorario(){
  var inputDarkMode = document.getElementById("dark-mode");
  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();

  if (horaAtual >= 6 && horaAtual <= 17) {
    inputDarkMode.checked = false;
  } else inputDarkMode.checked = true;
}

window.addEventListener("load", verificarHorario);

//Funcao de rolagem suave de página
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
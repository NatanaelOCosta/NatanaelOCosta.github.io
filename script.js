// Funcao para alternar entre os modos noturno e diurno do site automaticamente de acordo com a hora
function verificarHorario(){
  var inputDarkMode = document.getElementById("dark-mode");
  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();

  if (horaAtual >= 6 && horaAtual <= 17) {
    inputDarkMode.checked = false;
  } else inputDarkMode.checked = true;
}

window.addEventListener("load", verificarHorario);


// Funcao de digitacao do header
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['Técnico em Informática', 'Técnico em Eletrotécnica', 'Bacharél em Ciência da Computação', 'um desenvolvedor fron-end!'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

window.addEventListener("load", function() {
  setTimeout(type, typingDelay);
});

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}


// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const menuNav = document.querySelector('.menu-nav');
const body = document.querySelector('body');

hamburger.addEventListener('click', function(event) {
  event.stopPropagation();
  menuNav.classList.toggle('open');
});

body.addEventListener('click', function() {
  if (menuNav.classList.contains('open')) {
    menuNav.classList.remove('open');
  }
});



// Funcao de troca de slide do portifólio
document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.portfolio_stream');
  var items = document.querySelectorAll('.portfolio_item');
  var prev = document.querySelector('.portfolio_prev');
  var next = document.querySelector('.portfolio_next');

  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.portfolio_item');
  });

  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.portfolio_item');
  });
});


// Parallax
window.addEventListener('scroll', function() {
  var parallaxSection = document.querySelector('.parallax-section');
  var scrolled = window.pageYOffset;
  parallaxSection.style.backgroundPositionY = -(scrolled * 0.4) + 'px';
});
const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');

let fontSizeYes = 2;
let fontSizeNo = 1.5;

let messages = [
  'Estás segura?',
  'Piénsalo bien',
  'Piénsalo muy bien',
  'Piénsalo',
  'Mira el otro botón',
  '¡Yapoooo mi chacaliiin!',
  '¡VANEE AMORCITO JASFJASF!',
  '¡Yapooooo!',
  'Di que sí, amooooor',
  '¡Mi corazóncito de meloooon!',
  '¡Yapo mi watermelon!',
  'La amo mucho, dale al otro botón',
  '¡TE AMOOO, PIENSA JASJFAS!'
];

buttonNo.addEventListener('click', () => {
  fontSizeYes += 0.5;
  fontSizeNo -= 0.1;

  buttonYes.style.fontSize = `${fontSizeYes}rem`;
  buttonNo.style.fontSize = `${fontSizeNo}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
});

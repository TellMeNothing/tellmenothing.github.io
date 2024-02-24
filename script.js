const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón',
  'Yapoooo mi chacaliiin',
  'VANEE AMORCITO JASFJASF',
  'Yapooooo',
  'Di q chi amooooor',
  'Mi corazóncito de meloooon',
  'Yapo mi watermelon',
  'La amo mucho, dele al otro botón',
  'TE AMOOO PIENSA JASJFAS'

]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
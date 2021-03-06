const piano = document.querySelector('.piano')
const btnLetters = document.querySelector('.btn-letters')
const btnNotes = document.querySelector('.btn-notes')
const pianoKey = document.querySelectorAll('.piano-key')
var down = false;

//------------------------------------------------MOUSE
piano.addEventListener('mousedown', (e) => {
  playMusic(e)
  pianoKey.forEach(key => key.addEventListener('mouseover', playMusic))
  pianoKey.forEach(key => key.addEventListener('mouseout', removeActiveKey))
})

piano.addEventListener('mouseup', (e) => {
  console.log(e);
  pianoKey.forEach(key => key.removeEventListener('mouseover', playMusic))
  removeActiveKey(e)
})
document.querySelector('main').addEventListener('mouseup', (e) => {
  pianoKey.forEach(key => key.removeEventListener('mouseover', playMusic))
})

//------------------------------------------------KEYBOARD
window.addEventListener("keydown", (e) => {

  if (!e.repeat) {
    const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
    key.classList.add('piano-key-active')
    if (key === null) return;
    const audio = document.querySelector(`audio[data-note="${key.dataset.note}"]`);
    audio.currentTime = 0;
    audio.play();
  }
  return;
  ;
});
window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
  key.classList.remove('piano-key-active')
});

//------------------------------------------------CHANGE LETTER

btnLetters.addEventListener('click', () => {
  btnNotes.classList.remove('btn-active')
  btnLetters.classList.add('btn-active')
  pianoKey.forEach(k => k.classList.add('letter'))
})

btnNotes.addEventListener('click', () => {
  btnLetters.classList.remove('btn-active')
  btnNotes.classList.add('btn-active')
  pianoKey.forEach(k => k.classList.remove('letter'))
})
//------------------------------------------------FULLSCREEN

document.querySelector('.fullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      turnOffFullscreen()
    }
  }
})

const playMusic = (e) => {
  const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
  e.target.classList.add('colorful')
  e.target.classList.add('piano-key-active')
  audio.currentTime = 0;
  audio.play();
}
const removeActiveKey = (e) => {
  console.log(e.target);
  e.target.classList.remove('piano-key-active')
  e.target.classList.remove('colorful')
}
const turnOffFullscreen = () => {
  document.addEventListener("keypress", function (e) {
    if (e.key === 'Escape') {
      toggleFullScreen();
    }
  }, false);
}


const piano = document.querySelector('.piano')
piano.addEventListener('click', (e) => {
  const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
  audio.currentTime = 0;
  audio.play();
})

window.addEventListener("keydown", playNote);
function playNote(e) {
  const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
  const audio = document.querySelector(`audio[data-note="${key.dataset.note}"]`);

  audio.currentTime = 0;
  audio.play();
}

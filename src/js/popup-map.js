let mapBg = document.querySelector('.map__bg');
let map = document.querySelector('.map');
let openmapButtons = document.querySelectorAll('.open-map');
let closemapButton = document.querySelector('.close-map');

openmapButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    mapBg.classList.add('active');
    map.classList.add('active');
  });
});

closemapButton.addEventListener('click', () => {
  mapBg.classList.remove('active');
  map.classList.remove('active');
});

document.addEventListener('click', e => {
  if (e.target === mapBg) {
    mapBg.classList.remove('active');
    map.classList.remove('active');
  }
});

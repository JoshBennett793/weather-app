import './menu.css';

const backgroundBtn = document.querySelector('.background-selector');
const contentContainer = document.getElementById('content');

const getPngFileNameFromBackground = () => {
  const contentContainerBackgroundImg = window
    .getComputedStyle(contentContainer)
    .getPropertyValue('background-image');
  const pngFileName = contentContainerBackgroundImg.match(/\b(\w+)\.png\b/)[1];
  return pngFileName;
};

const toggleMenuBackgroundColor = () => {
  const menu = document.getElementById('menu');
  menu.className = getPngFileNameFromBackground();
};

const changeBackground = () => {
  let pngFileName = getPngFileNameFromBackground();
  const fileName = pngFileName === 'river' ? 'city' : 'river';
  contentContainer.style.backgroundImage = `url(../assets/backgrounds/${fileName}.png)`;
  pngFileName = fileName;
};

backgroundBtn.onclick = () => {
  changeBackground();
  toggleMenuBackgroundColor();
};

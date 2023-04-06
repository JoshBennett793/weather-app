import renderWeatherData from './components/app/app';

window.onload = () => {
  const searchIcon = document.querySelector('button');
  renderWeatherData();
  searchIcon.addEventListener('click', renderWeatherData);
};

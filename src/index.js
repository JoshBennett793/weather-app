import renderWeatherData from './components/app/app';

renderWeatherData();

const searchIcon = document.querySelector('button');

searchIcon.addEventListener('click', renderWeatherData);

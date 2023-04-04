import renderWeatherData from '../app/app';

import { validateSearchQuery } from '../search-query';

import { fetchWeatherData } from '../api/weather-data';

import './menu.css';

const backgroundBtn = document.querySelector('.background-selector');
const contentContainer = document.getElementById('content');
const searchBtn = document.querySelector('.search');
const searchBar = document.querySelector("input[type='text']");
const searchSubmitBtn = document.querySelector('button');

const toggleSearchBarVisibility = () => {
  searchBar.style.visibility =
    searchBar.style.visibility === 'visible' ? 'hidden' : 'visible';
  searchSubmitBtn.style.visibility =
    searchSubmitBtn.style.visibility === 'visible' ? 'hidden' : 'visible';
};

searchBtn.onclick = () => {
  toggleSearchBarVisibility();
  searchBar.select();
};

const form = document.querySelector('form');
const searchError = document.querySelector('span.error');

const formSubmissionHandler = async (event) => {
  event.preventDefault();
  const searchQueryIsValid = validateSearchQuery(searchBar.value);
  if (!searchQueryIsValid) {
    searchBar.className = 'invalid';
    searchError.textContent =
      'Please enter a valid search format. (i.e. "city", "city, 2 letter country code", or "zipcode, 2 letter country code")';
    searchError.className = 'error active';
  } else {
    searchBar.className = 'valid';
    searchError.textContent = '';
    searchError.className = 'error';
  }
  const weatherDataOrError = await fetchWeatherData(searchBar.value);
  if (weatherDataOrError instanceof Error) {
    if (weatherDataOrError.message.includes('Location not found')) {
      searchError.textContent =
        'Location not found. Please enter a valid location. (Hint: Check for spelling errors.)';
    } else {
      searchError.textContent =
        'Please recheck the search format and try again. (i.e. "city", "city, 2 letter country code", or "zipcode, 2 letter country code")';
    }
    searchBar.className = 'invalid';
    searchError.className = 'error active';
  } else {
    toggleSearchBarVisibility();
    await renderWeatherData(weatherDataOrError);
    form.reset();
  }
};

form.onsubmit = formSubmissionHandler;

searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchSubmitBtn.click();
  }
});

const getWebpFileNameFromBackground = () => {
  const contentContainerBackgroundImg = window
    .getComputedStyle(contentContainer)
    .getPropertyValue('background-image');
  const webpFileName =
    contentContainerBackgroundImg.match(/\b(\w+)\.webp\b/)[1];
  return webpFileName;
};

const toggleMenuBackgroundColor = () => {
  const [menu, wave, menuDivider] = document.querySelectorAll(
    '#menu-container, #wave, #menu-divider'
  );
  [menu, wave, menuDivider].forEach((el) => {
    el.className = getWebpFileNameFromBackground();
  });
};

const changeBackground = () => {
  let pngFileName = getWebpFileNameFromBackground();
  const fileName = pngFileName === 'river' ? 'city' : 'river';
  contentContainer.style.backgroundImage = `url(/assets/backgrounds/${fileName}.webp)`;
  pngFileName = fileName;
};

backgroundBtn.onclick = () => {
  changeBackground();
  toggleMenuBackgroundColor();
};

const hamburger = document.getElementById('hamburger-icon');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('not-active');
  contentContainer.classList.toggle('menu-open');
};

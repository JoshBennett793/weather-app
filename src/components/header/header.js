import './header.css';
import {
  getLocationNameFromJSON,
} from '../api/weather-data';

const searchBar = document.getElementById('location');

export const getLocationFromUserInput = () => searchBar.value;

export async function writeLocation(location, unit) {
  const locationInput = document.getElementById('location');

  const userInput = getLocationFromUserInput();
  const locationName = await getLocationNameFromJSON(userInput);
  locationInput.value = `${locationName ?? 'Minneapolis'}`;
}


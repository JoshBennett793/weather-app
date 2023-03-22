import './header.css';
import {
  extractLocationDateAndTime,
  getLocationNameFromJSON,
} from '../api/weather-data';

const searchBar = document.getElementById('location');

export const getLocationFromUserInput = () => searchBar.value;

export async function writeLocalDateTime(location, unit) {
  const locationInput = document.getElementById('location');
  const dateSpan = document.getElementById('date');
  const timeSpan = document.getElementById('time');

  const userInput = getLocationFromUserInput();
  const locationName = await getLocationNameFromJSON(userInput);
  locationInput.value = `${locationName ?? 'Minneapolis'}`;

  const dateTimeData = await extractLocationDateAndTime(location, unit);
  const date = dateTimeData.formattedDate;
  const time = dateTimeData.formattedTime;

  dateSpan.textContent = date;
  timeSpan.textContent = time;
}

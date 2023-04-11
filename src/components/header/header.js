import './header.css';

export default async function writeLocation() {
  const locationTitle = document.getElementById('header-location-title');

  const { getLocationFromUserInput } = await import('../app/search-query');
  const userInput = getLocationFromUserInput();

  const { getLocationNameFromJSON } = await import('../api/weather-data');
  const locationName = await getLocationNameFromJSON(userInput);
  locationTitle.textContent = `${locationName ?? 'Minneapolis'}`;
}

import './header.css';

export default async function writeLocation(location) {
  const locationTitle = document.getElementById('header-location-title');

  const { getLocationNameFromJSON } = await import('../api/weather-data');
  const locationName = await getLocationNameFromJSON(location);
  locationTitle.textContent = `${locationName ?? 'Minneapolis'}`;
}

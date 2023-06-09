const searchBar = document.getElementById('location');

export const getLocationFromUserInput = () => searchBar.value || 'Minneapolis';

export const validateSearchQuery = (searchQuery) => {
  const searchRegex =
    /^([a-zA-Z\d\s+]*)(,\s*([a-zA-Z]{2})?)?(,\s+([a-zA-Z]{2})?)?$/;
  return searchQuery.length === 0 || searchRegex.test(searchQuery);
};

export function createLocationState() {
  let location = 'Minneapolis';

  function setLocation(newLocation) {
    location = newLocation;
  }

  function getLocation() {
    return location;
  }

  return {
    setLocation,
    getLocation,
  };
}
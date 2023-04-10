import './cards.css';

function createDOMElement(tagName, attributes, text) {
  const element = document.createElement(tagName);
  const attributeKeys = Object.keys(attributes);
  attributeKeys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
}

function getDay(day) {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
}

export default function createCardElement(index, day, status, max, min) {
  const card = createDOMElement('div', {
    id: `card-${index}`,
    class: 'forecast-card',
  });
  const dayTitle = createDOMElement(
    'span',
    { class: 'card-title' },
    getDay(day),
  );
  const weatherStatus = createDOMElement('span', { class: 'status' }, status);
  const highTemp = createDOMElement('span', { class: 'high-temp' }, `High: ${max}°`);
  const lowTemp = createDOMElement('span', { class: 'low-temp' }, `Low: ${min}°`);
  card.append(dayTitle, weatherStatus, highTemp, lowTemp);
  return card;
}

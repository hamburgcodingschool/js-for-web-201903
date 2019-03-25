## Session 5

```javascript
let map;
const destinationsList = document.querySelector('.destinations-list');

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });

  fetch('./destinations.json')
    .then(parseResponseJSON)
    .then(addDestinationsToMap);
}

const addDestinationsToMap = destinations => {
  destinations.forEach(destination => {
    createMarker(destination);
    const listItem = createListItem(destination);
    listItem.addEventListener('click', clickEventHandler);

    destinationsList.appendChild(listItem);
  });
};

const parseResponseJSON = response => response.json();

const filterForAsia = destination => destination.continent === 'asia';

const createMarker = destination =>
  new google.maps.Marker({
    map,
    position: destination.position
  });

const createListItem = destination => {
  const itemContainerElement = document.createElement('li');
  const titleElement = document.createElement('div');
  const positionElement = document.createElement('div');

  titleElement.textContent = destination.name;
  positionElement.textContent = `${destination.position.lat}, ${
    destination.position.lng
  }`;

  itemContainerElement.appendChild(titleElement);
  itemContainerElement.appendChild(positionElement);

  return itemContainerElement;
};
```

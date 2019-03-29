let map;
let infowindow;
const destinationsList = document.querySelector('.destinations-list');

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });
  infowindow = new google.maps.InfoWindow();

  fetch('./destinations.json')
    .then(parseResponseJSON)
    .then(addDestinationsToMap);
}

const addDestinationsToMap = destinations => {
  destinations.forEach(destination => {
    const marker = createMarker(destination);

    marker.addListener('click', () => {
      infowindow.setContent(destination.name);
      infowindow.open(map, marker);
    });

    const listItem = createListItem(destination);
    listItem.addEventListener('click', () =>
      centerMapToDestination(destination)
    );
    destinationsList.appendChild(listItem);
  });
};

const centerMapToDestination = destination => {
  map.setCenter(destination.position);
  map.setZoom(destination.zoom || 8);
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

  itemContainerElement.className = 'destination-list-item';
  titleElement.className = 'destination-list-item-title';
  titleElement.textContent = destination.name;
  positionElement.textContent = `${destination.position.lat}, ${
    destination.position.lng
  }`;

  itemContainerElement.appendChild(titleElement);
  itemContainerElement.appendChild(positionElement);

  return itemContainerElement;
};

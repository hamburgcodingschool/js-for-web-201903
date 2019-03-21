var map;

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });

  fetch('./destinations.json')
    .then(parseResponseJSON)
    .then(addDestinationsToMap);
}

const addDestinationsToMap = destinations =>
  destinations.filter(filterForAsia).forEach(createMarker);

const parseResponseJSON = response => response.json();

const filterForAsia = destination => destination.continent === 'asia';

const createMarker = destination =>
  new google.maps.Marker({
    map,
    position: destination.position
  });

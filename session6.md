## Session 6

Firebase:  
https://firebase.google.com/docs/firestore/quickstart?authuser=0

Destinations from Firebase example:
```javascript
let map;

const destinationsList = document.querySelector('.destinations-list');

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDubWQKcpsZfDH0Yhau23kUQMwRskGApcA',
  authDomain: 'js-for-web-teacher.firebaseapp.com',
  projectId: 'js-for-web-teacher'
});

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });
  const db = firebase.firestore();

  db.collection('destinations')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        addDestinationToMap(doc.data());
      });
    });

  // fetch('./destinations.json')
  //   .then(parseResponseJSON)
  //   .then(addDestinationsToMap);
}

const addDestinationToMap = destination => {
  createMarker(destination);
  const listItem = createListItem(destination);

  destinationsList.appendChild(listItem);
};

const addDestinationsToMap = destinations => {
  destinations.forEach(addDestinationToMap);
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

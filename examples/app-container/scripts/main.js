const app = {};

function initApp() {
  app.mapLoaded = true;
  app.initListeners();
}

app.initMap = function() {
  app.mapInstance = app.map.initMap();
  app.mapInstance.addListener('click', () => infoWindow.close());

  app.infoWindow = new google.maps.InfoWindow();
  app.showAdminUi();
  app.db
    .fetchDestinations()
    .then(destinations => destinations.forEach(app.addDestinationToMap));
};

app.initListeners = () => {
  $('.login-button').addEventListener('click', app.login);
};

app.login = () => {
  app.auth.login().then(() => {
    app.removeLogin();
    app.initMap();
    app.showAdminUi();
  });
};

app.removeLogin = () => {
  $('.login-overlay').style.display = 'none';
};

app.showAdminUi = () => {
  $('.login-button').style.display = 'none';
  const $destinationButton = $('.add-destination-button');
  $destinationButton.style.display = 'block';

  $destinationButton.addEventListener('click', () =>
    app.overlay.openAddDestinationForm(app.addDestination)
  );
};

app.addDestination = data => {
  app.db.postNewDestination(data).then(app.addDestinationToMap);
};

app.addDestinationToMap = destination => {
  const marker = app.map.createMarker(destination.position);

  app.map.addMarkerEvents(marker, destination);
  console.log(destination);

  const listItem = app.list.createListItem(destination);
  listItem.addEventListener('click', () =>
    listClickEventHandler(marker, destination)
  );

  app.list.$destinationsList.appendChild(listItem);
};

// const listClickEventHandler = (marker, destination) => {
//   map.panTo(destination.position);
//   map.setZoom(destination.zoom || 8);
//   infoWindow.setContent(createInfoWindowContent(destination));
//   infoWindow.open(map, marker);
// };

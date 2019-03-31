const createInfoWindowContent = destination => {
  const infoWindowContainer = createElement('div');
  const name = createElement('p');
  const description = createElement('p');
  // const image = createElement('img')
  // image.src = destination.image
  // image.className = 'infowindow-image'
  name.textContent = destination.name;
  name.className = 'infowindow-text';
  description.textContent = destination.description;
  description.className = 'infowindow-description';
  // infoWindowContainer.appendChild(image)
  infoWindowContainer.appendChild(name);
  infoWindowContainer.appendChild(description);

  return infoWindowContainer;
};

const createMarker = position =>
  new google.maps.Marker({
    map: app.map.mapInstance,
    position
  });

const initMap = callback => {
  app.map.mapInstance = new google.maps.Map($('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });

  app.map.initListeners(callback);

  return app.map.mapInstance;
};

const initListeners = callback => {
  // app.mapInstance.addListener('click', () => infoWindow.close());

  app.map.mapInstance.addListener('click', event =>
    onMapClick(event, callback)
  );
};

const onMapClick = (event, callback) => {
  const position = event.latLng.toJSON();

  callback(position);
};

const addMarkerEvents = (marker, destination) => {
  marker.addListener('click', () => {
    app.infoWindow.setContent(createInfoWindowContent(destination));
    app.infoWindow.open(app.map.mapInstance, marker);
  });
};

app.map = {
  onMapClick,
  addMarkerEvents,
  initListeners,
  initMap,
  createMarker,
  createInfoWindowContent
};

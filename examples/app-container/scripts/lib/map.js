const createInfoWindowContent = destination => {
  const infoWindowContainer = createElement('div');
  // const image = createElement('img')
  // image.src = destination.image
  // image.className = 'infowindow-image'
  const name = createElement('p');
  name.textContent = destination.name;
  name.className = 'infowindow-text';
  const description = createElement('p');
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

const initMap = () => {
  app.map.mapInstance = new google.maps.Map($('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });
  return app.map.mapInstance;
};

const addMarkerEvents = (marker, destination) => {
  marker.addListener('click', () => {
    infoWindow.setContent(createInfoWindowContent(destination));
    infoWindow.open(map, marker);
  });
};

app.map = {
  addMarkerEvents,
  initMap,
  createMarker,
  createInfoWindowContent
};

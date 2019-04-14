const markers = [];

const createInfoWindowContent = destination => {
    const infoWindowContainer = createElement('div');
    const name = createElement('p');
    const description = createElement('p');
    if (destination.images) {
        const image = createElement('img')
        image.className = 'infowindow-image'
        image.src = destination.images[0];
        infoWindowContainer.appendChild(image);
    };
    name.textContent = destination.name;
    name.className = 'infowindow-text';
    description.textContent = destination.description;
    description.className = 'infowindow-description';
    infoWindowContainer.appendChild(name);
    infoWindowContainer.appendChild(description);

    return infoWindowContainer;
};

const createMarker = position => {
    const marker = new google.maps.Marker({
        map: app.map.mapInstance,
        position
    });
    markers.push(marker);
    return marker;
};

const clearMarkers = () => {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
};


const initMap = () => {
    app.map.mapInstance = new google.maps.Map($('.map'), {
        center: { lat: 07, lng: 0 },
        zoom: 2
    });

    app.map.initListeners();

    return app.map.mapInstance;
};

const initListeners = () => {
    app.map.mapInstance.addListener('click', () => app.infoWindow.close());

    app.map.mapInstance.addListener('click', event =>
        onMapClick(event)
    );
};

const onMapClick = (event) => {
    const position = event.latLng.toJSON();
    const latitudeInput = document.querySelector('.latitude');
    if (latitudeInput) {
        latitudeInput.value = position.lat;
    };
    const longitudeInput = document.querySelector('.longitude');
    if (longitudeInput) {
        longitudeInput.value = position.lng;
    };
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
    createInfoWindowContent,
    markers,
    clearMarkers
};
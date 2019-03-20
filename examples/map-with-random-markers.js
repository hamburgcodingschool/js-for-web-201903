var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 07, lng: 0},
    zoom: 2
  });

  while (markers.length < 100) {
    const marker = new google.maps.Marker({
      map,
      position: {lat: randomLat(), lng: randomLng()}
    });

    markers.push(marker);
  }

  function forEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      const arrayElement = array[index];

      callback(arrayElement, index, array);
    }
  }

  function addClickListerner(marker, index) {
    console.log(index);
  }

  forEach(markers, addClickListerner);

  markers.forEach(currentMarker => {
    currentMarker.addListener('click', clickHandler);
  });
}

const randomLat = () => {
  return Math.random() * 180 - 90;
};

const randomLng = () => {
  return Math.random() * 360 - 180;
};

const clickHandler = event => {
  const first10Markers = markers
    .map(addDistanceToMarker)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);
};

const addDistanceToMarker = marker => {
  const distance = google.maps.geometry.spherical.computeDistanceBetween(
    event.latLng,
    new google.maps.LatLng(marker.getPosition())
  );

  marker.distance = distance;

  return marker;
};

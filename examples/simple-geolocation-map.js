<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0" />
    <meta charset="utf-8" />
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.520008, lng: 13.404954},
          zoom: 8
        });

        navigator.geolocation.getCurrentPosition(success, error);
      }

      function success(position) {
        const marker = new google.maps.Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map
        });

        map.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }

      function error(err) {
        console.warn(err);
      }
    </script>

    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBp6IzZAuxAhtfazcY5OJ8NO8EoqNw4xsw&callback=initMap"
      async
      defer
    ></script>
  </body>
</html>

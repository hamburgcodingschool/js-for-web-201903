## Session 2

### DOM API

Get the first `<div>`:
```
document.querySelector('div')
```
Get all `<div>` elements:
```
document.querySelectorAll('div')
```

### Geolocation API

Your current position: 
```
navigator.geolocation
```  
With callbacks:
```
navigator.geolocation.getCurrentPosition(console.log, console.log)
```
Get all updates of the geolocation:  
```
navigator.geolocation.watchPosition(success, error, options)
```

Get your browser's current position:  
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition 

Get longitude and latitude of a place:   
https://www.latlong.net/


### Google Maps API

Documentation:  
https://developers.google.com/maps/documentation/javascript/tutorial 

> Latitude : max/min +90 to -90  
> Longitude : max/min +180 to -180

### Example

* [simple map](examples/simple-geolocation-map.js) with geolocation from browser 

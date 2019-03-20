## Session 4

map
- like a `for` loop
- iterates through the array
- collects everything returned in a new array
```
myArray.map(element => {
  // do something with the element
})

// returns: new array with manipulated elements
```

filter
- filters the array
- you can choose what you want to filter by in the function
```
myArray.filter(element => {
  return element.property > 0;
})

// returns: new array, only with elements where property > 0
```

reduce
- takes all the elements and creates one single return value from it
```
myArray.reduce((sum, element) => {
  return sum + element.property;
})

// returns: sum of all element.property in the array
```

sort
- sorts the content
- if the elements are not numbers or strings, you need to specify what you want to sort them by in the function
```
myArray.sort((a, b) => a.property - b.property)

// returns: a new array where all elements are sorted by their property
```

slice
- takes a certain range from the array and puts it into a new array
```
myArray.slice(0, 10))

// returns: new array with only the first 10 elements of the original array
```

combine them all:
```
const first10markersWithDistance = markers
    .map(marker => {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        event.latLng, 
        new google.maps.LatLng(marker.getPosition())
      );
      marker.distance = distance;
      return marker;
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);
```

Create an array of 10 destinations that you visited as JSON
- you can get your geolocation data from https://www.latlong.net/
- save it in `destinations.js`
```
const destinations = [
  {
    id: 'hamburg',
    name: 'Hamburg',
    position: {
      lat: 0,
      lng: 0
    },
    description: 'My home town :-)',
    continent: 'europe'
  },
  //...
]
```

Fetch destinations in `main.js`:
```
fetch('./destinations.js');
```

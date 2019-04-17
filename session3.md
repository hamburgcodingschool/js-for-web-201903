## Session 3

JavaScript Scopes and Closures:  
https://wsvincent.com/javascript-scope-closures/

Random number:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values
```
const getRandomNumber = (min, man) =>
    Math.floor(Math.random() * (max - min + 1) + min)
```

Random latitude, longitude:  
```
const randomLat = () => Math.random() * 180 - 90;
```
```
const randomLon = () => Math.random() * 360 - 180;
```

Standard function:
```
function add(first, second) {
  return first + second;
}
```
```
add(2, 5) 
// 7
```

Fat arrow function:
``` 
const multiply = (number1, number2) =>
    number1 * number2;
```
```
multiply(2, 5)
// 10
```

Array functions:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Calculate distance between 2 geolocations:  
`google.maps.geometry.spherical.computeDistanceBetween()`


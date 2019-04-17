## Session 7

Firebase Firestore: Add data  
https://firebase.google.com/docs/firestore/manage-data/add-data

Firestore Document:  
https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference

Firestore DocumentSnapshot:  
https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot

Useful VS Code Plugins:  
> Bracket Pair Colorizer  
> Prettier  
> ESLint  
> Project Manager  
> Code Spell Checker  

Authentication  
- Firebase offers a feature for that
- if you want to do it yourself, you need a lot of background knowledge, do a large implementation and cover a lot of edge cases

Firbase Auth  
https://firebase.google.com/docs/auth/web/firebaseui

Athentication vs. Authorization
- Athentication: this is me and this is my identity
- Authorization: I have the right to access this and this, but not that (access rights)

Hide/show a button for unauthorized/authorized:  
- hide the button when the user is not logged in
- show when he is logged in
- if you code this in HTML, this can be exploited
- it's a better way to create the button it in JavaScript
- another security measure is to obfuscate your JavaScript code

Extract javascript into single `*.js` files
- include in the right order in HTML
- the last script will be `main.js` where all our business logic is
- all the others are helper scripts

Writing our own query selector helper function:
```
const $ = (selector, parent = document) => {
  return parent.querySelector(selector);
}
```

For `createElement()`:
```
const createElement = (elementType, options) => {
  const element = document.createElement(elementType);
  
  Object.keys(options).forEach(key => {
    element[key] = options[key];
  });
  
  return element;
}
```
Call like:
```
createElement('input', {
  className: 'input-class-name',
  type: 'submit',
  onClick: () => {},
  textContent: ''
})
```


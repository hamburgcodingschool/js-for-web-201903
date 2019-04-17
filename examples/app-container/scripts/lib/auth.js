var provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      app.auth.token = result.credential.accessToken;
      // The signed-in user info.
      app.auth.user = result.user;

      return result;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

app.auth = {
  login
};

firebase.initializeApp(app.config.firebase);

const postNewDestination = ({
  name,
  continent,
  description,
  latitude,
  longitude
}) =>
  app.db.firebase
    .collection('destinations')
    .add({
      name,
      continent,
      description,
      position: new firebase.firestore.GeoPoint(latitude, longitude)
    })
    .then(docRef => docRef.get())
    .then(mapFirebaseToGoogle)
    .catch(err => console.log(err));

/**
 * Transforms firebase document instance to google position object
 * @param {firebaseDoc} doc
 */
const mapFirebaseToGoogle = doc => {
  const {position, ...rest} = doc.data();

  return {
    ...rest,
    position: {
      lat: position.latitude,
      lng: position.longitude
    }
  };
};

const fetchDestinations = () => {
  return app.db.firebase
    .collection('destinations')
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs.map(app.db.mapFirebaseToGoogle);
    })
    .catch(err => console.error(err));
};

app.db = {
  firebase: firebase.firestore(),
  fetchDestinations,
  mapFirebaseToGoogle,
  postNewDestination
};

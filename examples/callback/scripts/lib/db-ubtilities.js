firebase.initializeApp({
    apiKey: "AIzaSyDnCfXJ9E3NYatdS2FYqDyN7PJK2hJ17Zw",
    authDomain: "js-for-web-kat.firebaseapp.com",
    projectId: "js-for-web-kat",
    storageBucket: "js-for-web-kat.appspot.com",
});

const postNewDestination = ({
        name,
        continent,
        description,
        position,
        userName,
        image
    }) =>
    app.db.firebase
    .collection('destinations')
    .add({
        name,
        continent,
        description,
        userName,
        image,
        position: new firebase.firestore.GeoPoint(position.latitude, position.longitude)
    })
    .then(docRef => docRef.get())
    .then(mapFirebaseToGoogle)
    .catch(err => console.log(err));

/**
 * Transforms firebase document instance to google position object
 * @param {firebaseDoc} doc
 */
const mapFirebaseToGoogle = doc => {
    const { id } = doc;
    const { position, ...rest } = doc.data();

    return {
        ...rest,
        id,
        position: {
            lat: position.latitude,
            lng: position.longitude
        }
    };
};

const uploadImage = (file) => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${file.name}`);
    return imageRef.put(file).then(() => {
        return imageRef.getDownloadURL();
    });

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

const updateDestination = (data, id) => {
    return app.db.firebase.collection('destinations').doc(id)
        .update(data)
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
};

const deleteDestination = (id) => {
    return app.db.firebase.collection('destinations').doc(id)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
};

const fetchDestinationsByUser = (userName) => {
    return app.db.firebase
        .collection('destinations')
        .where('userName', '==', userName)
        .get()
        .then(querySnapshot => {
            return querySnapshot.docs.map(app.db.mapFirebaseToGoogle);
        })
        .then(destinations => destinations.forEach(app.addDestinationToMap))
        .catch(err => console.error(err));
};

app.db = {
    firebase: firebase.firestore(),
    fetchDestinations,
    mapFirebaseToGoogle,
    postNewDestination,
    updateDestination,
    deleteDestination,
    fetchDestinationsByUser,
    uploadImage
};
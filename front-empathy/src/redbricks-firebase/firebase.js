import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/firebase-firestore';

const prodConfig = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_PROD_APP_ID,
    measurementId: process.env.REACT_APP_PROD_MEASUREMENT_ID
};

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DEV_APP_ID,
    measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        firebase.analytics();

        this.db = firebase.firestore();
    }

    // *** Event API ***

    loadEvents = () => {
        return this.db.collection('event').get().then(querySnapshot => {
            const events = [];
            querySnapshot.forEach((doc) => {
                events.push({ id: doc.id, ...doc.data() });
            });
            return events;
        })
    };

    loadEvent = eventId => {
        return this.db.collection('event').doc(eventId).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error("No such document!");
            }
        })
    }
}

export default Firebase;

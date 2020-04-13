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

    loadEvents() {
        return this.db.collection('event').get().then(querySnapshot => {
            const events = [];
            querySnapshot.forEach((doc) => {
                events.push({ id: doc.id, ...doc.data() });
            });
            return events;
        })
    };

    loadEvent(eventId) {
        return this.db.collection('event').doc(eventId).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error("No such document!");
            }
        })
    };

    // *** Artist API ***

    loadArtistWithPath(artistPath) {
        return this.db.doc(artistPath).get().then(doc => {
            // TODO: 중복제거하기
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error("No such document!");
            }
        });
    };

    setArtist(artistData) {
        const {
            artistDocId,
            artistBio,
            artistImg,
            artistInstaId,
            artistName,
            artistProgramType
        } = artistData;

        return this.db.collection('artist').doc(artistDocId).set({
            artistBio,
            img: artistImg,
            instaId: artistInstaId,
            name: artistName,
            programType: artistProgramType
        }).then(() => {
            alert('submit success!');
            return true;
        }).catch(() => {
            alert('submit failure');
            return false;
        });
    }

    // *** Location API ***

    loadLocationWithPath(locationPath) {
        return this.db.doc(locationPath).get().then(doc => {
            // TODO: 중복제거하기
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error("No such document!");
            }
        });
    }

    setLocation(locationData) {
        const {
            locationDocId,
            locationDescription,
            locationImg,
            locationInstaId,
            locationMapLink,
            locationName,
            locationProgramType
        } = locationData;

        return this.db.collection('location').doc(locationDocId).set({
            description: locationDescription,
            img: locationImg,
            instaId: locationInstaId,
            mapLink: locationMapLink,
            name: locationName,
            programType: locationProgramType
        }).then(() => {
            alert('submit success!');
            return true;
        }).catch(() => {
            alert('submit failure');
            return false;
        });
    }

    setEvent(eventData) {
        const {
            eventArtists,
            eventTime,
            eventDescription,
            eventLocation,
            eventProgramType,
            eventTitle,
            eventYoutubeVideoId,
        } = eventData;

        const artistRefs = eventArtists.map(artist => {
            return this.db.collection('artist').doc(artist);
        });
        const locationRef = this.db.collection('location').doc(eventLocation);
        const startDate = firebase.firestore.Timestamp.fromDate(new Date(eventTime.start));
        const endDate = firebase.firestore.Timestamp.fromDate(new Date(eventTime.end));

        // .add 메서드는 Auto id를 제너레이트한다.
        return this.db.collection('event').add({
            artists: artistRefs,
            date: {
                start: startDate,
                end: endDate
            },
            description: eventDescription,
            location: locationRef,
            programType: eventProgramType,
            title: eventTitle,
            youtubeVideoId: eventYoutubeVideoId
        }).then(() => {
            alert('submit success!');
            return true;
        }).catch((e) => {
            alert('submit failure');
            return false;
        });
    }
}

export default Firebase;

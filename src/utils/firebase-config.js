import { initializeApp } from 'firebase';

export const initiFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDlaS-AtglIGOTQU9VKAL5x4419C7TvQAg",
        authDomain: "roflix-5707f.firebaseapp.com",
        databaseURL: "https://roflix-5707f.firebaseio.com",
        projectId: "roflix-5707f",
        storageBucket: "roflix-5707f.appspot.com",
        messagingSenderId: "876772187368",
        appId: "1:876772187368:web:387d505afde3db9f60fd5d"
    };
}
initializeApp(firebaseConfig);

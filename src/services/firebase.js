// Your web app's Firebase configuration
const config = {
    apiKey: 'AIzaSyB9KhUP_ZD2LMg1kSrBqPJwf9UimFTH4W8',
    authDomain: 'fork-2.firebaseapp.com',
    databaseURL: 'https://fork-2.firebaseio.com',
    projectId: 'fork-2',
    storageBucket: 'fork-2.appspot.com',
    messagingSenderId: '58783712968',
    appId: '1:58783712968:web:4deabc220837dbf4'
};

  // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();

export const roomsRef = db.ref('chatRooms');

import firebase from 'firebase/app'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAKV0Mhs3-dAJvaiuDOvG3VM7zASZubUc",
    authDomain: "vue-test-92e3a.firebaseapp.com",
    databaseURL: "https://vue-test-92e3a.firebaseio.com",
    projectId: "vue-test-92e3a",
    storageBucket: "vue-test-92e3a.appspot.com",
    messagingSenderId: "809120396894",
    appId: "1:809120396894:web:70b902782497dee8a626cf"
};

const firebaseApp = firebase
.initializeApp(firebaseConfig);

// Get a RTDB instance
export const db = firebaseApp.database();
//  Get storage
export const storage = firebaseApp.storage();

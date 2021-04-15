import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

// Replace this with your own config details
const firebaseConfig = {
    apiKey: 'AIzaSyBPgpCza1PIxkX-siRknEc5onyFUqVbCq4',
    authDomain: 'alto-tech-test.firebaseapp.com',
    databaseURL: 'https://alto-tech-test-default-rtdb.firebaseio.com',
    projectId: 'alto-tech-test',
    storageBucket: 'alto-tech-test.appspot.com',
    messagingSenderId: '912864205980',
    appId: '1:912864205980:web:55fd6c82b229725e2ce159',
    measurementId: 'G-6F4WE6K9F4',
}
firebase.initializeApp(firebaseConfig)
firebase.firestore()
// .settings({ timestampsInSnapshots: true });
firebase.database()

export default firebase

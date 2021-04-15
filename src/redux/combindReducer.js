import { combineReducers } from 'redux'
import energyReducer from './reducers/energyReducer'
import scheduleReducer from './reducers/scheduleReducer'
import triggerReducer from './reducers/triggerReducer'
import dashboardReducer from './reducers/dashboardReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
    energyReducer,
    scheduleReducer,
    triggerReducer,
    dashboardReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

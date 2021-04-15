import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import createReduxStore from './redux/createReduxStore'
import fbConfig from './config/fbConfig'
import { Redirect } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminLayout from './layouts/Admin.js'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/paper-dashboard.css'
import './assets/css/custom.css'
import './assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
} // react-redux-firebase config

const store = createReduxStore()
const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
}

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/admin"
                        render={(props) => <AdminLayout {...props} />}
                    />
                    <Redirect to="/admin/energy" />
                </Switch>
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    // </React.StrictMode>
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createBrowserHistory as createHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { getFirebase } from 'react-redux-firebase'
import combindReducer from './combindReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createHistory()
const historyRouterMiddleware = routerMiddleware(history)

export default () => {
    return createStore(
        // combindReducer,
        connectRouter(history)(combindReducer),
        // composeEnhancer(applyMiddleware(thunk, historyRouterMiddleware, logger))
        composeEnhancer(
            applyMiddleware(
                thunk.withExtraArgument(getFirebase),
                historyRouterMiddleware
                // logger
            )
        )
    )
}

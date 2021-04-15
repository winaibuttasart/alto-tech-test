import { DASHBOARD } from '../actions/dashboardAction'

const initState = {
    isFetching: true,
    error: null,
    dashboard: [],
    panelLeft: [],
    panelRight: [],
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case DASHBOARD.PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case DASHBOARD.FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload.error,
            }
        case DASHBOARD.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                ...payload,
            }
        default:
            return state
    }
}

export default reducer

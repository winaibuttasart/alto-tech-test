import { SCHEDULE } from '../actions/scheduleAction'

const initState = {
    isFetching: true,
    // isFetching: false,
    error: null,
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SCHEDULE.PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case SCHEDULE.FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload.error,
            }
        case SCHEDULE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
            }
        default:
            return state
    }
}

export default reducer

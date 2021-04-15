import { TRIGGER } from '../actions/triggerAction'

const initState = {
    isFetching: true,
    // isFetching: false,
    error: null,
    modal: false,
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case TRIGGER.PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case TRIGGER.FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload.error,
            }
        case TRIGGER.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                modal: payload.modal,
            }
        default:
            return state
    }
}

export default reducer

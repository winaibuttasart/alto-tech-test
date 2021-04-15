import { ENERGY } from '../actions/energyAction'

const initState = {
    isFetching: true,
    // isFetching: false,
    error: null,
    energy: [],
    // energy: [
    //     {
    //         name: 'Soloar panel',
    //         value: 52.6,
    //         subfix: 'kW',
    //         color: 'green',
    //     },
    //     {
    //         name: 'Battery',
    //         value: 0,
    //         subfix: 'kW',
    //         color: 'green',
    //     },
    //     {
    //         name: 'Utility',
    //         // value: 30.5,
    //         value: 0,
    //         subfix: 'kW',
    //         color: 'orange',
    //     },
    //     {
    //         name: 'Total load',
    //         value: 83.1,
    //         subfix: 'kW',
    //     },
    // ],
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ENERGY.PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case ENERGY.FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload.error,
            }
        case ENERGY.SUCCESS:
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

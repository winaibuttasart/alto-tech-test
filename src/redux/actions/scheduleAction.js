import firebase from 'firebase'
const createActionSet = require('./createActionSet')
export const SCHEDULE = createActionSet.createActionSet('SCHEDULE')

export const updateSchedule = (payload) => async (dispatch) => {
    dispatch({
        type: SCHEDULE.PENDING,
    })
    firebase
        .ref('/')
        .update({...payload})
        .then(() => {
            console.log('update success')
            dispatch({ type: SCHEDULE.SUCCESS })
        })
        .catch((err) => {
            dispatch({
                type: SCHEDULE.FAILED,
                payload: { error: err.message },
            })
        })
}

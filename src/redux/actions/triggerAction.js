import firebase from 'firebase'
const createActionSet = require('./createActionSet')

export const TRIGGER = createActionSet.createActionSet('TRIGGER')

export const getTriggerValue = (payload) => async (dispatch) => {
    dispatch({
        type: TRIGGER.PENDING,
    })
    firebase.ref('/').on(
        'value',
        (snapshot) => {
            let tmpModal = snapshot.val()
            dispatch({
                type: TRIGGER.SUCCESS,
                payload: {
                    modal: tmpModal.modal,
                },
            })
        },
        (err) => {
            dispatch({
                type: TRIGGER.FAILED,
                payload: { error: err.message },
            })
        }
    )
}

export const updateTriggerNormal = (payload) => async (dispatch) => {
    dispatch({
        type: TRIGGER.PENDING,
    })
    firebase
        .ref('/')
        .update({ ...payload })
        .then(() => {
            console.log('update success')
            dispatch({ type: TRIGGER.SUCCESS, payload })
        })
        .catch((err) => {
            console.log(`err`, err.message)
            dispatch({
                type: TRIGGER.FAILED,
                payload: { error: err.message },
            })
        })
}

import firebase from 'firebase'
const createActionSet = require('./createActionSet')

export const ENERGY = createActionSet.createActionSet('ENERGY')

export const getEnergy = (payload) => async (dispatch) => {
    dispatch({
        type: ENERGY.PENDING,
    })
    firebase.ref('/').on(
        'value',
        (snapshot) => {
            let tmp = snapshot.val()
            dispatch({
                type: ENERGY.SUCCESS,
                payload: {
                    energy: tmp.energy ? tmp.energy : [],
                },
            })
        },
        (err) => {
            dispatch({
                type: ENERGY.FAILED,
                payload: { error: err.message },
            })
        }
    )
}

export const updateEnergy = (payload) => async (dispatch) => {
    dispatch({
        type: ENERGY.PENDING,
    })
    firebase
        .ref('/')
        .update({ ...payload })
        .then(() => {
            console.log('update success')
            dispatch({ type: ENERGY.SUCCESS, payload })
        })
        .catch((err) => {
            console.log(`err`, err.message)
            dispatch({
                type: ENERGY.FAILED,
                payload: { error: err.message },
            })
        })
}

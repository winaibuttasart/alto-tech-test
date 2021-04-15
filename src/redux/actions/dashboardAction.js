import firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/th'
const createActionSet = require('./createActionSet')

export const DASHBOARD = createActionSet.createActionSet('DASHBOARD')

export const resetDashboard = (payload) => async (dispatch) => {
    dispatch({
        type: DASHBOARD.PENDING,
    })

    let tmpDate = new Date()
    let initialDate = moment(tmpDate).format('YYYY-DD-MM HH:MM:SS')
    const dashboard = [
        {
            name: 'กล้วย',
            price: 23,
            date: initialDate,
        },
        {
            name: 'สัปปะรด',
            price: 32,
            date: initialDate,
        },
        {
            name: 'แอปเปิล',
            price: 10,
            date: moment(
                new Date(
                    tmpDate.getFullYear(),
                    tmpDate.getMonth(),
                    tmpDate.getDate() - 1
                )
            ).format('YYYY-DD-MM HH:MM:SS'),
        },
        {
            name: 'ส้ม',
            price: 30,
            date: initialDate,
        },
        {
            name: 'มะพร้าว',
            price: 20,
            date: initialDate,
        },
    ]

    const panelLeft = [
        {
            type: 'mean',
            title: 'ค่า mean จาก line chart',
            subfix: 'หน่วย',
        },
        {
            type: 'chart',
            title: 'Line Chart',
            detail: 'แสดงข้อมูลจาก firebase ในรูปแบบ line chart',
            chartType: 'linechart',
            chartTitle: 'ข้อมูลราคาผลไม้',
            chartName: 'ราคา',
        },
    ]

    const panelRight = [
        {
            type: 'mean',
            title: 'ค่า mean จาก bar chart',
            subfix: 'หน่วย',
        },
        {
            type: 'chart',
            title: 'Bar Chart',
            detail: 'แสดงข้อมูลจาก firebase ในรูปแบบ bar chart',
            chartType: 'barchart',
            chartTitle: 'ข้อมูลราคาผลไม้',
            chartName: 'ราคา',
        },
    ]

    firebase
        .ref('/')
        .update({
            dashboard: dashboard,
            panelLeft: panelLeft,
            panelRight: panelRight,
        })
        .then(() => {
            console.log('update success')
            dispatch({
                type: DASHBOARD.SUCCESS,
                payload: {
                    dashboard: dashboard,
                    panelLeft: panelLeft,
                    panelRight: panelRight,
                },
            })
        })
        .catch((err) => {
            console.log(`err`, err.message)
            dispatch({
                type: DASHBOARD.FAILED,
                payload: { error: err.message },
            })
        })
}

export const getDashboard = (payload) => async (dispatch) => {
    dispatch({
        type: DASHBOARD.PENDING,
    })
    const { startDate, endDate } = payload
    let tmpStartDate = new Date(new Date(startDate).setHours(0, 0, 0))
    let tmpEndDate = new Date(new Date(endDate).setHours(23, 59, 59))
    firebase
        .database()
        .ref('/dashboard')
        .orderByChild('date')
        .startAt(moment(tmpStartDate).format('YYYY-DD-MM HH:MM:SS'))
        .endAt(moment(tmpEndDate).format('YYYY-DD-MM HH:MM:SS'))
        .on(
            'value',
            (snapshot) => {
                let tmpData = snapshot.val()
                let tmpDashboard = tmpData
                    ? tmpData.filter((item) => item.name)
                    : []
                dispatch({
                    type: DASHBOARD.SUCCESS,
                    payload: {
                        dashboard: [...tmpDashboard],
                    },
                })
            },
            (err) => {
                dispatch({
                    type: DASHBOARD.FAILED,
                    payload: { error: err.message },
                })
            }
        )
}

export const getPanel = (payload) => async (dispatch) => {
    dispatch({
        type: DASHBOARD.PENDING,
    })
    firebase
        .database()
        .ref('/')
        .on(
            'value',
            (snapshot) => {
                let tmpData = snapshot.val()
                // console.log(`tmpData`, tmpData)
                dispatch({
                    type: DASHBOARD.SUCCESS,
                    payload: {
                        panelLeft: tmpData.panelLeft ? tmpData.panelLeft : [],
                        panelRight: tmpData.panelRight
                            ? tmpData.panelRight
                            : [],
                    },
                })
            },
            (err) => {
                dispatch({
                    type: DASHBOARD.FAILED,
                    payload: { error: err.message },
                })
            }
        )
}

export const updateDashboard = (payload) => async (dispatch) => {
    dispatch({
        type: DASHBOARD.PENDING,
    })
    firebase
        .ref('/')
        .update({ ...payload })
        .then(() => {
            console.log('update success')
            dispatch({
                type: DASHBOARD.SUCCESS,
                payload: {
                    ...payload,
                },
            })
        })
        .catch((err) => {
            console.log(`err`, err.message)
            dispatch({
                type: DASHBOARD.FAILED,
                payload: { error: err.message },
            })
        })
}

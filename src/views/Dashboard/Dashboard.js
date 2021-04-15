import React, { useState, useEffect } from 'react'
import { Row, Progress, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
    getDashboard,
    updateDashboard,
    getPanel,
    // resetDashboard,
} from '../../redux/actions/dashboardAction'
import { DragPanel, SelectDate } from './components'
import { handleDrag } from '../../utils/utils'

export default function Dashboard() {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date(Date.now()))
    const [endDate, setEndDate] = useState(new Date(Date.now()))
    const { dashboard, panelLeft, panelRight, isFetching } = useSelector(
        (state) => state.dashboardReducer
    )

    useEffect(() => {
        dispatch(getDashboard({ startDate, endDate }))
        dispatch(getPanel({}))
    }, [startDate, endDate])

    const handleChangeStartDate = (e) => {
        let tmp = new Date(e.target.value)
        if (tmp.getTime() > endDate.getTime()) {
            setEndDate(tmp)
        }
        setStartDate(tmp)
    }

    const handleChangeEndDate = (e) => {
        let tmp = new Date(e.target.value)
        if (tmp.getTime() < startDate.getTime()) {
            setStartDate(tmp)
        }
        setEndDate(tmp)
    }

    const data = dashboard.map((item) => item.price)
    const xaxis = dashboard.map((item) => item.name)

    const handleDrop = (e, panel) => {
        if (panel === 'left') {
            let tmp = handleDrag(panelLeft, e)
            dispatch(updateDashboard({ panelLeft: tmp }))
        } else {
            let tmp = handleDrag(panelRight, e)
            dispatch(updateDashboard({ panelRight: tmp }))
        }
    }

    // const handleReset = () => {
    //     dispatch(resetDashboard({}))
    // }

    return (
        <>
            <div className="content">
                {/* <button onClick={handleReset}>reset</button> */}

                <Row>
                    <SelectDate
                        startDate={startDate}
                        endDate={endDate}
                        handleChangeStartDate={handleChangeStartDate}
                        handleChangeEndDate={handleChangeEndDate}
                    />

                    {isFetching && (
                        <Col xs="12">
                            <Progress animated value="100" />
                        </Col>
                    )}

                    {!isFetching && (
                        <DragPanel
                            panel={panelLeft}
                            panelLocation="left"
                            handleDrop={handleDrop}
                            data={data}
                            xaxis={xaxis}
                        />
                    )}

                    {!isFetching && (
                        <DragPanel
                            panel={panelRight}
                            panelLocation="right"
                            handleDrop={handleDrop}
                            data={data}
                            xaxis={xaxis}
                        />
                    )}
                </Row>
            </div>
        </>
    )
}

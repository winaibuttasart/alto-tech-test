import React, { useEffect } from 'react'
import { Row, Col, Progress } from 'reactstrap'
import Circle from './components/Circle'
import { useSelector, useDispatch } from 'react-redux'
import Summary from './components/Summary'
import { getEnergy } from '../../redux/actions/energyAction'

export default function DashboardEnergy() {
    const dispatch = useDispatch()
    const { energy, isFetching } = useSelector((state) => state.energyReducer)
    // console.log(`energy`, energy)
    const checkUtility = () => {
        // let tmp = energy ? energy.find((item) => item.name === 'Utility') : {}
        // return tmp.value
    }

    useEffect(() => {
        dispatch(getEnergy({}))
    }, [])

    return (
        <>
            <div className="content">
                <Circle />
                <Row>
                    <Col sm="12">
                        <h5>SUMMARY</h5>
                    </Col>
                    {isFetching && (
                        <Col xs="12">
                            <Progress animated value="100" />
                        </Col>
                    )}

                    {energy.map((item, index) => (
                        <Summary item={item} key={index} />
                    ))}
                    {checkUtility() === 0 ? (
                        <Col sm="12">
                            <h5 className="green">NET ZERO</h5>
                        </Col>
                    ) : null}
                </Row>
            </div>
        </>
    )
}

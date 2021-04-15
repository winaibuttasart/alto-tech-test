import React, { useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import CustomModal from './components/CustomModal'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateTriggerNormal,
    getTriggerValue,
} from '../../redux/actions/triggerAction'

export default function ModalPopup() {
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.triggerReducer.modal)

    const toggle = () => {
        dispatch(
            updateTriggerNormal({
                modal: !modal,
            })
        )
    }

    useEffect(() => {
        dispatch(getTriggerValue({}))
    }, [])

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <p className="card-category">
                            modal มีค่า = {`${modal}`}
                        </p>
                        <Button color="danger" onClick={toggle}>
                            เปิด
                        </Button>
                        <CustomModal modal={modal} toggle={toggle} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import CustomModal from './components/CustomModal'
import { useSelector } from 'react-redux'
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase'

export default function ModalPopup() {
    const firebase = useFirebase()
    const [modal, setModal] = useState(false)
    const toggle = () => {
        firebase.ref('/').update({
            modal: !modal,
        })
    }
    useFirebaseConnect(['modal'])

    const modalDataFromFirebase = useSelector(
        (state) => state.firebase.data.modal
    )

    useEffect(() => {
        setModal(modalDataFromFirebase)
    }, [modalDataFromFirebase])

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

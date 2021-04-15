import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function CustomModal({ modal, toggle }) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                trigger modal จากการอัพเดท Firebase node
            </ModalHeader>
            <ModalBody>
                ตัวอย่าง trigger modal จากการอัพเดท Firebase node เป็น true
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    ปิด
                </Button>
            </ModalFooter>
        </Modal>
    )
}

import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { DateInput } from './index'

export default function SelectDate({
    startDate,
    endDate,
    handleChangeStartDate,
    handleChangeEndDate,
}) {
    return (
        <Col sm="12">
            <Card className="card-stats2">
                <CardBody>
                    <p className="card-category">เลือกวันที่ต้องการดูข้อมูล</p>
                    <Row>
                        <DateInput
                            label="ตั้งแต่"
                            id="startDate"
                            date={startDate}
                            handleChangeDate={handleChangeStartDate}
                        />

                        <DateInput
                            label="ถึง"
                            id="endDate"
                            date={endDate}
                            handleChangeDate={handleChangeEndDate}
                        />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

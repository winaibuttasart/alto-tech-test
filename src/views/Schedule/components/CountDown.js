import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, Col } from 'reactstrap'
import moment from 'moment'
import 'moment/locale/th'

export default function CountDown({ date, time, countDown }) {
    return (
        <Col xs="12">
            <Card className="card-stats">
                <CardHeader>
                    <CardTitle tag="h5">{`เวลาที่ตั้งไว้คือ `}</CardTitle>

                    <p className="card-category">
                        {`${moment(new Date(date)).format(
                            'วันที่ DD เดือน MMMM ปี YYYY'
                        )} เวลา ${time} นาฬิกา`}
                    </p>
                    <p className="card-category">
                        {`เวลานับถอยหลัง ${countDown} วินาที`}
                    </p>
                </CardHeader>
                <CardBody></CardBody>
            </Card>
        </Col>
    )
}

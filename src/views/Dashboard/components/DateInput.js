import React from 'react'
import { Col, Input } from 'reactstrap'
import moment from 'moment'
import 'moment/locale/th'

export default function DateInput({ label, id, date, handleChangeDate }) {
    return (
        <Col>
            <label htmlFor={id}>{label}</label>
            <Input
                type="date"
                name={id}
                id={id}
                placeholder="เลือกวันที่"
                min={Date.now()}
                value={moment(new Date(date)).format('YYYY-MM-DD')}
                max={moment(new Date()).format('YYYY-MM-DD')}
                onChange={handleChangeDate}
            />
        </Col>
    )
}

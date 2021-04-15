import React from 'react'
import { Col } from 'reactstrap'

export default function Summary({ item }) {
    return (
        <>
            <Col sm="6">
                <h6>{item.name}</h6>
            </Col>
            <Col sm="3">
                <h6>{item.value}</h6>
            </Col>
            <Col sm="3">
                <h6
                    className={
                        item.name === 'Total load'
                            ? item.value > 80
                                ? 'red'
                                : 'green'
                            : ''
                    }
                >
                    {item.subfix}
                </h6>
            </Col>
        </>
    )
}

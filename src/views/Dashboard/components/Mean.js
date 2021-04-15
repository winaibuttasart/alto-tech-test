import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Mean({ title, data, subfix }) {
    const mean = data.reduce((a, b) => a + b, 0) / data.length

    return (
        <Card className="card-stats">
            <CardBody>
                <p className="card-category">
                    {title}
                    <span className="right">{`${mean.toFixed(2)} ${subfix}`}</span>
                </p>
            </CardBody>
        </Card>
    )
}

import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap'
import { LineChart } from '../../Chart'
import BarChart from '../../Chart/BarChart'

export default function Chart({
    title,
    detail,
    chartType,
    chartTitle,
    chartName,
    data,
    xaxis,
}) {
    return (
        <Card className="card-stats">
            <CardHeader>
                <CardTitle tag="h5">{title}</CardTitle>
                <p className="card-category">{detail}</p>
            </CardHeader>
            <CardBody>
                {chartType === 'linechart' && (
                    <LineChart
                        title={chartTitle}
                        name={chartName}
                        data={data}
                        xaxis={xaxis}
                    />
                )}
                {chartType === 'barchart' && (
                    <BarChart
                        title={chartTitle}
                        name={chartName}
                        data={data}
                        xaxis={xaxis}
                    />
                )}
            </CardBody>
        </Card>
    )
}

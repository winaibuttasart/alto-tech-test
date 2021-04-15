import React from 'react'
import { Col } from 'reactstrap'
import { Container, Draggable } from 'react-smooth-dnd'
import { Mean, Chart } from './index'

export default function DragPanel({
    panel,
    panelLocation,
    handleDrop,
    data,
    xaxis,
}) {
    return (
        <Col xs="12" md="6">
            <div className="dragHover">
                <Container
                    groupName="1"
                    getChildPayload={(i) => panel[i]}
                    onDrop={(e) => handleDrop(e, panelLocation)}
                >
                    {panel.map((item, index) => {
                        return (
                            <Draggable key={index}>
                                {item.type === 'mean' ? (
                                    <Mean
                                        title={item.title}
                                        data={data}
                                        subfix={item.subfix}
                                    />
                                ) : (
                                    <Chart
                                        title={item.title}
                                        detail={item.detail}
                                        chartType={item.chartType}
                                        chartTitle={item.chartTitle}
                                        chartName={item.chartName}
                                        data={data}
                                        xaxis={xaxis}
                                    />
                                )}
                            </Draggable>
                        )
                    })}
                </Container>
            </div>
        </Col>
    )
}

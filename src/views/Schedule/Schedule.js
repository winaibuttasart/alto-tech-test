import React, { useState, useEffect, useRef } from 'react'
import NotificationAlert from 'react-notification-alert'
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
} from 'reactstrap'
import moment from 'moment'
import 'moment/locale/th'
import CountDown from './components/CountDown'

export default function Schedule() {
    const notificationAlert = useRef(null)
    const [date, setDate] = useState(new Date(Date.now()))
    const [time, setTime] = useState(
        // moment(new Date(Date.now() + 2 * 60 * 1000)).format('HH:mm')
        moment(new Date(Date.now())).format('HH:mm')
    )
    const [countDown, setCountDown] = useState(-1)
    const [start, setStart] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(`countDown`, countDown)
            if (countDown > 0) {
                reFormatTimeAndSetup()
            } else {
                if (start && countDown === 0) {
                    handleAlert()
                }
                clearInterval(interval)
                setStart(false)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [start, countDown])

    const reFormatTimeAndSetup = () => {
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let tmpTime = time.split(':')
        let hour = Number(tmpTime[0])
        let minute = Number(tmpTime[1])
        let tmpTimeSet = new Date(year, month, day, hour, minute).getTime()
        getDiffTimeSec(tmpTimeSet)
        setStart(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        reFormatTimeAndSetup()
    }

    const getDiffTimeSec = (tmpTimeSet) => {
        let tmpDiff = moment
            .duration(moment(moment(tmpTimeSet).diff(moment(Date.now()))))
            .asSeconds()
            .toFixed()
        setCountDown(Number(tmpDiff))
    }

    const isError = () => {
        let dateToday = moment(new Date()).format('DD-MM-YYYY')
        let dateSelected = moment(new Date(date)).format('DD-MM-YYYY')
        if (dateToday === dateSelected) {
            let timeNow = moment(new Date()).format('HH:mm')
            let tmpTime1 = time.split(':')
            let tmpTime2 = timeNow.split(':')
            if (Number(tmpTime2[0]) > Number(tmpTime1[0])) {
                return true
            } else if (Number(tmpTime2[0]) === Number(tmpTime1[0])) {
                return Number(tmpTime2[1]) >= Number(tmpTime1[1])
            } else {
                return false
            }
        } else {
            return false
        }
    }

    const handleAlert = () => {
        const options = {
            place: 'tr',
            message: (
                <div>
                    <div>
                        Welcome to <b>Paper Dashboard React</b> - a beautiful
                        freebie for every web developer.
                    </div>
                </div>
            ),
            type: 'primary',
            icon: 'nc-icon nc-bell-55',
            autoDismiss: 7,
        }
        if (notificationAlert && notificationAlert.current) {
            notificationAlert.current.notificationAlert(options)
        }
    }

    return (
        <>
            <div className="content">
                <NotificationAlert ref={notificationAlert} />

                <Row>
                    <Col xs="12">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">
                                    ตั้งเวลาแจ้งเตือน
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <label htmlFor="exampleDate">
                                                    วันที่
                                                </label>
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="เลือกวันที่"
                                                    min={Date.now()}
                                                    value={moment(
                                                        new Date(date)
                                                    ).format('YYYY-MM-DD')}
                                                    min={moment(
                                                        new Date()
                                                    ).format('YYYY-MM-DD')}
                                                    onChange={(e) => {
                                                        setDate(
                                                            new Date(
                                                                e.target.value
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <FormGroup>
                                                <label htmlFor="exampleTime">
                                                    เวลา
                                                </label>
                                                <Input
                                                    type="time"
                                                    name="time"
                                                    id="exampleTime"
                                                    placeholder="เลือกเวลา"
                                                    value={time}
                                                    onChange={(e) => {
                                                        console.log(
                                                            'value : ',
                                                            e.target.value
                                                        )
                                                        setTime(e.target.value)
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="12">
                                            <p className="card-category">
                                                คุณเลือกวันที่{' '}
                                                {moment(date).format(
                                                    'DD-MM-YYYY'
                                                )}{' '}
                                                เวลา {time} นาฬิกา
                                            </p>
                                            {isError() ? (
                                                <p className="text-danger">
                                                    ไม่สามารถตั้งแจ้งเตือนเวลาที่ผ่านมาแล้ว
                                                </p>
                                            ) : null}
                                        </Col>
                                        <Col sm="12">
                                            <Button
                                                className="btn-round right"
                                                color="primary"
                                                type="submit"
                                                disabled={isError()}
                                            >
                                                ตั้งเวลา
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {countDown > 0 ? (
                        <CountDown
                            date={date}
                            time={time}
                            countDown={countDown}
                        />
                    ) : null}
                </Row>
            </div>
        </>
    )
}

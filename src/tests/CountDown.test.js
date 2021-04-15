import React from 'react'
import { mount } from 'enzyme'
import CountDown from '../views/Schedule/components/CountDown'
import moment from 'moment'
import 'moment/locale/th'

describe('render <CountDown />', () => {
    it('should render CountDown to static HTML', () => {
        let countDown = 10
        let time = moment(new Date(Date.now())).format('HH:mm')
        const wrapper = mount(
            <CountDown date={new Date()} time={time} countDown={countDown} />
        )
        let tmp = wrapper.find('.card-category').getElements()
        expect(tmp[0].props.children).toEqual(
            `วันที่ 15 เดือน เมษายน ปี 2021 เวลา ${time} นาฬิกา`
        )
        expect(tmp[1].props.children).toEqual(
            `เวลานับถอยหลัง ${countDown} วินาที`
        )
    })
})

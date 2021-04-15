import React from 'react'
import { mount } from 'enzyme'
import DateInput from '../views/Dashboard/components/DateInput'

describe('render <Chart />', () => {
    it('should render Chart to static HTML', () => {
        let tmpDate = new Date()
        const wrapper = mount(
            <DateInput
                label="ตั้งแต่"
                id="startDate"
                date={tmpDate}
                handleChangeDate={() => {}}
            />
        )
        const tmp = wrapper.getElement()
        expect(tmp.props.label).toEqual('ตั้งแต่')
        expect(tmp.props.date).toEqual(tmpDate)
    })
})

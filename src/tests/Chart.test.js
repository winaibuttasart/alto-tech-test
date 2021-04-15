import React from 'react'
import { mount } from 'enzyme'
import Chart from '../views/Dashboard/components/Chart'

describe('render <Chart />', () => {
    it('should render Chart to static HTML', () => {
        const wrapperLineChart = mount(
            <Chart
                chartName="ราคา"
                chartTitle="ข้อมูลราคาผลไม้"
                chartType="linechart"
                detail="แสดงข้อมูลจาก firebase ในรูปแบบ line chart"
                title="Line Chart"
                type="chart"
                data={[23, 32, 30, 20]}
                xaxis={['กล้วย', 'สัปปะรด', 'ส้ม', 'มะพร้าว']}
            />
        )

        expect(wrapperLineChart.find('.card-category').text()).toEqual(
            'แสดงข้อมูลจาก firebase ในรูปแบบ line chart'
        )
    })
})

import React from 'react'
import { shallow, render } from 'enzyme'
import Mean from '../views/Dashboard/components/Mean'

describe('render <Mean />', () => {
    it('should render without throwing an error', () => {
        shallow(
            <Mean
                title="ค่า mean จาก Line Chart"
                data={[5, 5, 5, 5]}
                subfix="บาท"
            />
        )
    })

    it('should render Mean to static HTML', () => {
        const componentLineChart = render(
            <Mean
                title="ค่า mean จาก Line Chart "
                data={[5, 5, 5, 5]}
                subfix="บาท"
            />
        )
        const componentBarChart = render(
            <Mean
                title="ค่า mean จาก Bar Chart "
                data={[1, 2, 2, 6]}
                subfix="บาท"
            />
        )
        expect(componentLineChart.text()).toEqual('ค่า mean จาก Line Chart 5.00 บาท')
        expect(componentBarChart.text()).toEqual('ค่า mean จาก Bar Chart 2.75 บาท')
    })
})

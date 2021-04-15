import React from 'react'
import Chart from 'react-apexcharts'

export default function BarChart({ title, name, data, xaxis }) {
    const series = [
        {
            name: name,
            data: [...data],
        },
    ]

    const options = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: [...xaxis],
        },
        title: {
            text: title,
            align: 'left',
        },
    }

    return <Chart options={options} series={series} type="bar" />
}

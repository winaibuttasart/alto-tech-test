import React from 'react'
import Chart from 'react-apexcharts'

export default function LineChart({ title, name, data, xaxis }) {
    const series = [
        {
            name: name,
            data: [...data],
        },
    ]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
        },
        title: {
            text: title,
            align: 'left',
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: [...xaxis],
        },
    }

    return <Chart options={options} series={series} type="line" />
}

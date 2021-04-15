import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

export default function Gauge() {
    const [options, setOptions] = useState({
        chart: {
            type: 'radialBar',
            height: 350,
            //   offsetY: -20,
            //   offsetY: 0,
            //   sparkline: {
            //     enabled: true,
            //   },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    //   margin: 15,
                    //   size: "70%",
                    // image: "../../assets/images/clock.png",
                    image:
                        'https://i.pinimg.com/736x/93/ba/d4/93bad4a30ce45ea9d655bb1a194890af.jpg',
                    imageWidth: 64,
                    imageHeight: 64,
                    imageClipped: false,
                },
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: '#e7e7e7',
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2,
                    },
                },
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        // show: false,
                        show: true,
                        color: '#000',
                        offsetY: 70,
                    },
                    value: {
                        show: false,
                        offsetY: -2,
                        fontSize: '22px',
                        formatter: function (val) {
                            return val + '%'
                        },
                    },
                },
            },
        },
        grid: {
            padding: {
                top: -10,
            },
        },
        // fill: {
        //   type: "image",
        //   image: {
        //     // src: ["../../assets/images/clock.png"],
        //     src: [
        //       "https://i.pinimg.com/736x/93/ba/d4/93bad4a30ce45ea9d655bb1a194890af.jpg",
        //     ],
        //   },
        // },

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },

        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shade: "light",
        //     shadeIntensity: 0.4,
        //     inverseColors: false,
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 50, 53, 91],
        //   },
        // },
        stroke: {
            //   lineCap: "round",
            dashArray: 4,
        },
        labels: ['Average Results'],

        // legend: {
        //   show: true,
        //   floating: true,
        //   fontSize: "16px",
        //   position: "left",
        //   offsetX: 160,
        //   offsetY: 15,
        //   labels: {
        //     useSeriesColors: true,
        //   },
        //   markers: {
        //     size: 0,
        //   },
        //   formatter: function (seriesName, opts) {
        //     return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        //   },
        //   itemMargin: {
        //     vertical: 3,
        //   },
        // },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       legend: {
        //         show: false,
        //       },
        //     },
        //   },
        // ],
    })

    const [series, setSeries] = useState([76])
    return (
        <div id="chart">
            <Chart options={options} series={series} type="radialBar" />
        </div>
    )
}

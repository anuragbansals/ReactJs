import React, { useEffect, useRef } from 'react'
import {Chart} from 'chart.js'
import { historyOptions } from '../chartConfig/chartConfigs'

const HistoryChart = () => {
    const chartRef = useRef()

    useEffect(() => {
        if(chartRef && chartRef.current){
            const chartInstance = new Chart(chartRef.current, {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: "# of votes",
                            data: [
                                { x: 1, y: 15 },
                                { x: 2, y: 12 },
                                { x: 3, y: 25 },
                            ],
                            backgroundColor: "rgba(174, 305, 194, 0.5)",
                            borderWidth: 1,
                            borderColor: "rgba(174, 305, 194, 0.4)",
                            pointRadius: 0
                        }
                    ]
                },
                options: historyOptions
            } )
        }
    })

    return (
        <div>
            <canvas ref={chartRef} id="myChart" width = {250} height ={250}></canvas>
        </div>
    )
}

export default HistoryChart;
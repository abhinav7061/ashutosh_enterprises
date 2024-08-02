"use client"
import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const weeklySalesTabs = [
    {
        title: "Orders",
        type: 'orders',
        color: "#009B3B",
        data: {
            labels,
            datasets: [
                {
                    label: 'Orders',
                    data: [58, 94, 3, 8, 54, 23, 67],
                    borderColor: 'rgba(0, 155, 59)',
                    backgroundColor: 'rgb(0, 155, 59)',
                }
            ],
        }
    }, {
        title: "Sales",
        type: 'sales',
        color: "#f38200",
        data: {
            labels,
            datasets: [
                {
                    label: 'Sales',
                    data: [23, 5, 2, 65, 86, 23, 65],
                    borderColor: 'rgb(243, 130, 0)',
                    backgroundColor: 'rgb(243, 130, 0)',
                }
            ],
        }
    }
]

const WeeklySalesChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const [chartToDisplay, setChartToDisplay] = useState(weeklySalesTabs[0].type);
    return (
        <div className='bg-white dark:bg-slate-800 p-8 rounded-lg'>
            <h2 className=' text-xl font-bold mb-4'>Weekly Sellings</h2>
            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-800 border-b border-gray-100 dark:text-gray-100 dark:border-gray-700 mb-4">
                <ul className="flex flex-wrap -mb-px">
                    {
                        weeklySalesTabs.map((tab, i) => {
                            return (
                                <li className="me-2" key={i}>
                                    <button
                                        type='button'
                                        className={chartToDisplay == tab.type ? `border-b-2 inline-block p-4 text-[${tab.color}] border-[${tab.color}]` : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-500 dark:hover:border-gray-400 dark:hover:text-gray-300"}
                                        onClick={() => setChartToDisplay(tab.type)}
                                        key={i}
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Content to display */}
            {
                weeklySalesTabs.map((tab, i) => {
                    if (chartToDisplay === tab.type) {
                        return (
                            <Line options={options} data={tab.data} key={i} />
                        )
                    }
                    return null;
                })
            }
        </div>
    )
}

export default WeeklySalesChart
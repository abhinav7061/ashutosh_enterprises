"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingProductsChart = ({ data }) => {
    return (
        <div className='bg-white dark:bg-slate-800 p-8 rounded-lg'>
            <h2 className=' text-xl font-bold mb-4'>Best Selling Products</h2>
            <div className="p-8 flex items-center justify-center ">
                <Pie data={data} />
            </div>
        </div>
    )
}

export default BestSellingProductsChart
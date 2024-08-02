import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'
import { bestSellingProductsChartData } from '@/constants/orders'

const DashboardCharts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
            <WeeklySalesChart />
            <BestSellingProductsChart data={bestSellingProductsChartData} />
        </div>
    )
}

export default DashboardCharts
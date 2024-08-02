import React from 'react'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'
import DashboardCharts from '@/components/backend/DashboardCharts'
import CustomDataTable from '@/components/backend/CustomDataTable'
import datas from '../../../data.json';

const page = () => {
    return (
        <div>
            <Heading title={`Dashboard Overview`} />
            {/*Large cards */}
            <LargeCards />
            {/* Small cards */}
            <SmallCards />
            {/* Charts */}
            <DashboardCharts />
            {/* Recent orders table */}
            <div className=' bg-gray-400 dark:bg-slate-800 rounded-lg p-8'>
                <h2 className=' text-xl font-bold mb-4'>Recent Orders</h2>
                <CustomDataTable thead={datas.thead} datas={datas.data} />
            </div>
        </div>
    )
}

export default page
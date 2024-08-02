import React from 'react'

const LargeCard = ({ data }) => {
    return (
        <div className={`rounded-lg text-white shadow-md p-5 sm:p-6 md:p-8 flex flex-col items-center gap-2 ${data.color}`}>
            {data.icon}
            <h4 className='font-medium text-base'>{data.period}</h4>
            <h2 className='text-2xl font-bold font-mono'>₹{data.sales}</h2>
        </div>
    )
}

export default LargeCard
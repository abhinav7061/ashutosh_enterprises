import React from 'react'

const SmallCard = ({ data }) => {
    return (
        <div className='rounded-lg shadow-lg border dark:border-0 border-slate-200 bg-white dark:bg-slate-800 p-4'>
            <div className="flex space-x-4">
                <div className={`w-12 h-12 ${data.bgColor} rounded-full flex items-center justify-center p-3 md:p-4`}>
                    {data.icon}
                </div>
                <div className="">
                    <p>{data.title}</p>
                    <h3 className='text-2xl font-bold'>{data.number}</h3>
                </div>
            </div>
        </div >
    )
}

export default SmallCard
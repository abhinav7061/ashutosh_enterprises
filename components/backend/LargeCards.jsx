import React from 'react'
import LargeCard from './LargeCard'
import { ShoppingCart, Layers, CalendarCheck, CalendarOff, CalendarClock } from 'lucide-react'

const ordersNumber = [{
    period: 'Today Orders',
    sales: 11000,
    color: 'bg-green-600',
    icon: <ShoppingCart />,
},
{
    period: 'Yesterday Orders',
    sales: 12500,
    color: 'bg-blue-600',
    icon: <Layers />,
},
{
    period: 'This Monts',
    sales: 851000,
    color: 'bg-orange-600',
    icon: <CalendarCheck />,
},
{
    period: 'Last Monts',
    sales: 501000,
    color: 'bg-emerald-600',
    icon: <CalendarOff />,
},
{
    period: 'All Time Sales',
    sales: 68029000,
    color: 'bg-purple-600',
    icon: <CalendarClock />,
}]

const LargeCards = () => {
    return (
        <div className='py-4 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
                ordersNumber.map((stat, i) => {
                    return (
                        <LargeCard key={i} data={stat} />
                    )
                })
            }
        </div>
    )
}

export default LargeCards
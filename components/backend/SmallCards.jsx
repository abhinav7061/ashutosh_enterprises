import React from 'react'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'
const orderStatus = [{
    title: 'Total Orders',
    number: 547,
    bgColor: 'bg-green-200 dark:bg-green-600',
    icon: <ShoppingCart />
},
{
    title: 'Orders Pending',
    number: 74,
    bgColor: 'bg-blue-200 dark:bg-blue-600',
    icon: <Loader2 />
},
{
    title: 'Orders Processing',
    number: 85,
    bgColor: 'bg-orange-200 dark:bg-orange-600',
    icon: <RefreshCcw />
},
{
    title: 'Orders Delivered',
    number: 143,
    bgColor: 'bg-purple-200 dark:bg-purple-600',
    icon: <CheckCheck />
}]

const SmallCards = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4'>
            {
                orderStatus.map((stat, i) => {
                    return (
                        <SmallCard key={i} data={stat} />
                    )
                })
            }
        </div>
    )
}

export default SmallCards
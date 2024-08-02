import React from 'react'
import { AlignJustify } from 'lucide-react'
import UserIcon from './UserIcon'
import Notification from './Notification'
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'

const Navbar = ({ setShowSidebar }) => {
    return (
        <div className={`flex items-center justify-between bg-slate-50 dark:bg-slate-800 text-green-700 h-16 px-8 py-4 w-full  transition-all duration-700 z-40 shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)]`}>
            {/* The width of the Navebar depends on the sidebar so it is set to w-full always and lg:w-[calc(100%-15rem)] when the sidebar is shown. This may seem counterintuitive because setting the with w-[calc(100%-15rem)] even if `showSidebar` is false. It is because when the screen is `lg` the sidebar is shown at false while when the screen is less than `lg` then sidebar is show at true value. Its widht doesn't depend on layout because of its `fixed` property */}
            {/* Icon */}
            <button onClick={() => setShowSidebar(prev => !prev)} className='z-40'>
                <AlignJustify className='hover:text-green-500' />
            </button>

            <div className="flex gap-6 items-center z-40">
                <ThemeSwitcherBtn />

                <Notification />

                <UserIcon />
            </div>
        </div>
    )
}

export default Navbar
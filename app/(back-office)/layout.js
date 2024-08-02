"use client"
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React, { useState } from 'react'
import { Toaster } from "sonner";
import { useOnlineStatus } from '@/context/OnlineStatusContext';
import OnlineStatus from '@/components/backend/OnlineStatus';
import { useDrawer } from '@/context/DrawerContext';

const Layout = ({ children }) => {
    const { showDrawer } = useDrawer();
    const { isOnline, hasComeOnline } = useOnlineStatus();
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <OnlineStatus className='transition-all duration-700' isOnline={isOnline} hasComeOnline={hasComeOnline} />
            <div className='flex bg-white dark:bg-slate-800 relative flex-1'>
                {/* this is the position for showing notification */}
                {showDrawer || <Toaster position="top-center" richColors closeButton='true' />}
                {/* sidebar */}
                <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
                {showSidebar && <div className='absolute lg:hidden w-full h-full bg-black animate-opacityInc opacity-50 z-[9]'></div>}
                {/* The width of the main depends on the sidebar so it is set to w-full always and lg:w-[calc(100%-15rem)] when the sidebar is shown. This may seem counterintuitive because setting the with w-[calc(100%-15rem)] even if `showSidebar` is false. It is because when the screen is `lg` the sidebar is shown at false while when the screen is less than `lg` then sidebar is show at true value */}
                <div className={`w-full flex flex-col  ml-0 ${showSidebar ? 'lg:ml-0' : 'lg:w-[calc(100%-15rem)]'} transition-all duration-700 ${(!isOnline || hasComeOnline) ? 'h-[calc(100vh-24px)]' : 'h-screen'}`}>
                    {/* header */}
                    <Navbar setShowSidebar={setShowSidebar} />
                    {/* Main  */}
                    <main className='bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-50 md:p-8 sm:p-6 p-2 py-4 overflow-auto flex-1'>
                        {children}
                    </main>
                </div>
                {/* main body */}
            </div>
        </div>
    )
}

export default Layout
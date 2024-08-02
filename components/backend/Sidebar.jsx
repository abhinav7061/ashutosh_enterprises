"use client"
import { LucideLogOut, Slack, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { sidebarLinks } from '@/constants/sidebar';
import { useOnlineStatus } from '@/context/OnlineStatusContext';
import Button from './Button';

const Sidebar = ({ setShowSidebar, showSidebar }) => {
    const pathname = usePathname();
    const { isOnline, hasComeOnline } = useOnlineStatus();
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 1024) {
            setShowSidebar(false);
        }
    };

    useEffect(() => {
        if (showSidebar) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showSidebar]);

    const [subLinksOpened, setSubLinksOpened] = useState(false);

    return (
        // The height of sidebar is 100vh-(height of navbar(64px) + height of onlineStatus(24px)) for <lg screen and 100vh-height of onlineStatus(24px) for >lg screen when the onlineStatus is shown where as when it is not show then height of sidebar is 100vh-height of navbar(64px) for <lg screen and 100vh for >lg screen
        <div
            ref={sidebarRef}
            className={`flex flex-col ${showSidebar ? 'w-60 lg:w-0' : 'w-0 lg:w-60'} fixed lg:static transition-all duration-700 overflow-hidden bg-slate-50 dark:bg-slate-800 ${(!isOnline || hasComeOnline) ? 'h-[calc(100vh-88px)] mt-[88px] lg:h-[calc(100vh-24px)]' : 'h-[calc(100vh-64px)] mt-16 lg:h-screen'} text-slate-700 font-bold dark:text-gray-400 text-sm left-0 top-0 z-10 lg:mt-0`}
        >
            <div className='flex-1 overflow-y-auto overflow-x-hidden '>
                <div className='flex items-center ps-4 h-16'>
                    <Link href="#">
                        <Image src='/logoWithoutBg.png' width={120} height={56} alt='Logo' />
                    </Link>
                </div>
                <ul className="space-y-2 flex flex-col">
                    {
                        sidebarLinks.map((item, i) => {
                            return item?.isSubLink ? (
                                <li key={item.name}>
                                    <Dropdown
                                        dilogProperty='flex justify-center'
                                        button={
                                            <BtnForSublinks
                                                pathname={pathname}
                                                subLinksOpened={subLinksOpened}
                                                title={item.name}
                                                subLinks={item?.subLinks}
                                            />
                                        }
                                        className='flex flex-col gap-3 w-full'
                                        opened={setSubLinksOpened}
                                        key={item.name}
                                    >
                                        <ul className='bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-lg space-y-2 flex flex-col items-start text-xs w-min max-w-48 overflow-auto animate-opacityInc'>
                                            {
                                                item?.subLinks.map((subLink, i) => {
                                                    return (
                                                        <li
                                                            key={subLink.name}
                                                            className='min-w-full'
                                                        >
                                                            <Link
                                                                href={subLink.link}
                                                                onClick={() => setShowSidebar(false)}
                                                                className={`text-start py-1 px-3 rounded-md flex items-center gap-2  ${pathname == subLink.link ? 'text-green-600' : 'hover:text-slate-950 hover:bg-slate-200 dark:hover:bg-slate-300 '}`}
                                                            >
                                                                <span>
                                                                    {subLink.icon}
                                                                </span>
                                                                {subLink.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Dropdown>
                                </li>
                            ) : (
                                <Link href={item.link} key={item.name} onClick={() => setShowSidebar(false)} className={`flex items-center gap-3 ps-4 py-2 ${item.link === pathname ? 'border-l-4 border-green-600 text-green-600' : 'dark:hover:text-white hover:text-slate-950 hover:bg-slate-200 dark:hover:bg-slate-900'}`}>{item.icon}<h3>{item.name}</h3></Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex items-center justify-center px-6 py-4 overflow-hidden'>
                <Button
                    title='Logout'
                    icon={<LucideLogOut />}
                    className='bg-green-700 hover:bg-green-600 w-full overflow-hidden'
                />
            </div>
        </div>
    );
};

export default Sidebar;

const BtnForSublinks = ({ pathname, subLinksOpened, title = '', subLinks = [] }) => {
    return (
        <button className={`flex items-center gap-4 w-full ps-4 py-2 ${subLinks.some(item => item.link === pathname) ? 'border-l-4 border-green-600 text-green-600' : 'dark:hover:text-white hover:text-slate-950 hover:bg-slate-200 dark:hover:bg-slate-900'}`}>
            <div className='flex gap-3 items-center'>
                <Slack height={20} />
                {title}
            </div>
            <div className='relative'><div className=' w-full h-full absolute'></div>{subLinksOpened ? <ChevronDown /> : <ChevronRight />}</div>
        </button>
    )
}
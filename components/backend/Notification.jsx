"use client";
import React from 'react';
import { Bell, User } from 'lucide-react';
import Dropdown from './Dropdown';

const Notification = () => {
    return (
        <Dropdown button={<BellIcon />} dilogProperty={`absolute right-0 top-10  shadow-xl rounded-lg`} className='relative'>
            <div className='w-64 sm:w-80 lg:w-96 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 dark:divide-gray-500 border dark:border-0 overflow-auto max-h-[calc(100vh-64px)] animate-opacityInc'>
                <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:text-white">
                    Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-500">
                    <NotificationItem
                        iconColor="bg-blue-600"
                        message={`New message from Jese Leos: "Hey, what's up? All set for the presentation?"`}
                        time="a few moments ago"
                    />
                    <NotificationItem
                        iconColor="bg-gray-900"
                        message="Joseph Mcfall and 5 others started following you."
                        time="10 minutes ago"
                    />
                    <NotificationItem
                        iconColor="bg-red-600"
                        message="Bonnie Green and 141 others love your story. See it and view more stories."
                        time="44 minutes ago"
                    />
                    <NotificationItem
                        iconColor="bg-green-400"
                        message="Lio Livingston mentioned you in a comment: @bonnie.green what do you say?"
                        time="1 hour ago"
                    />
                    <NotificationItem
                        iconColor="bg-purple-500"
                        message="Brown posted a new video: Glassmorphism - learn how to implement the new design trend."
                        time="3 hours ago"
                    />
                </div>
                <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                    <div className="inline-flex items-center">
                        <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        View all
                    </div>
                </a>
            </div>
        </Dropdown>
    );
};

const BellIcon = () => {
    return (
        <>
            <Bell fill='green' className='hover:text-green-500 cursor-pointer' />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[8px] font-bold text-white bg-red-500 border-2 -top-2 -end-2 border-white rounded-full  dark:border-slate-700">20</div>
            {/* <div class="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div> */}
        </>
    );
};

const NotificationItem = ({ iconColor, message, time }) => {
    return (
        <button className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div className="flex-shrink-0 relative">
                <User />
                <div className={`absolute flex items-center justify-center w-5 h-5 ms-3 -mt-2 ${iconColor} border border-white rounded-full dark:border-gray-800`}>
                    <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                    </svg>
                </div>
            </div>
            <div className="ps-3 ">
                <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400 line-clamp-1">
                    {message}
                </div>
                <div className='flex items-center justify-between px-4'>
                    <span className='text-xs rounded-full leading-5 px-3 bg-orange-800 font-bold text-gray-600 dark:text-gray-400'>
                        Sold
                    </span>
                    <div className="text-xs text-blue-600 dark:text-blue-500">{time}</div>
                </div>
            </div>
        </button>
    );
};

export default Notification;

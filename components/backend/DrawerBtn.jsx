"use client"
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { X, Plus } from 'lucide-react'
import { Toaster } from 'sonner'
import { useDrawer } from '@/context/DrawerContext'
import Button from './Button'

const DrawerBtn = ({ buttonTitle = '', drawerContent }) => {
    const { showDrawer, setShowDrawer } = useDrawer();
    return (
        <Dropdown
            button={<AddBtn btnTitle={buttonTitle} dilogOpened={showDrawer} />}
            className='text-start'
            dilogProperty='fixed top-0 right-0 h-screen w-full sm:w-[85%] md:w-[75%] lg:w-[60%] flex justify-end z-40 oveflow-x-hidden'
            opened={setShowDrawer}
        >
            {showDrawer && <Toaster position="top-center" richColors closeButton='true' />}
            {drawerContent}
        </Dropdown>
    )
}

export default DrawerBtn

const AddBtn = ({ dilogOpened, btnTitle }) => {
    return (
        <>
            {/* <button className='px-4 py-3 rounded-md flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 w-full text-slate-100'><Plus size={16} disabled />Add {btnTitle}</button> */}
            <Button
                title={`Add ${btnTitle}`}
                icon={<Plus size={16} disabled />}
                className='w-full bg-green-700 hover:bg-green-600'
            />
            {dilogOpened && <>
                <div className='z-40 fixed bg-black opacity-60 top-0 left-0 h-screen w-full flex justify-end' />
                <button type='button' className='w-10 h-10 rounded-full bg-white hover:bg-red-50 p-3 hover:p-[10px] flex items-center justify-center text-slate-600 hover:text-red-500 hover:border-2 hover:border-red-500 shadow-md fixed z-50 top-4 right-4'>
                    <X strokeWidth={5} />
                </button>
            </>}
        </>
    )
}
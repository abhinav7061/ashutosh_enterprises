"use client"
import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeSwitcherBtn = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) {
        return null;
    }

    return (
        <button className='hover:text-green-500' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === "light" ? <Moon fill='green' /> : <Sun fill='green' />}
        </button>
    )
}

export default ThemeSwitcherBtn
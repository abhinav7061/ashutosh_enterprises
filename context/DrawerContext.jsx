"use client"
import React, { createContext, useContext, useState } from 'react';

const drawerContext = createContext();

export function useDrawer() {
    return useContext(drawerContext);
}

export function DrawerContext({ children }) {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <drawerContext.Provider value={{ showDrawer, setShowDrawer }}>
            {children}
        </drawerContext.Provider>
    );
}

"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const onlineContexts = createContext();

export function useOnlineStatus() {
    return useContext(onlineContexts);
}

const OnlineStatusContext = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true);
    const [hasComeOnline, setHasComeOnline] = useState(false);

    useEffect(() => {
        // Function to update the state based on the online status
        const updateOnlineStatus = () => {
            const online = navigator.onLine;
            if (online && !isOnline) {
                setHasComeOnline(true);
                setTimeout(() => setHasComeOnline(false), 3000); // Hide the message after 3 seconds
            }
            setIsOnline(online);
        };

        // Add event listeners for online and offline events
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Set initial status
        updateOnlineStatus();

        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, [isOnline]);


    return (
        <onlineContexts.Provider value={{ isOnline, hasComeOnline }}>
            {children}
        </onlineContexts.Provider>
    );
};

export default OnlineStatusContext;

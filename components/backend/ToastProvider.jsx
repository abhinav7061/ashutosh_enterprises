import React, { createContext, useContext } from 'react';
import { Toaster, toast } from 'sonner';

const ToastContext = createContext();

export function useToast() {
    return useContext(ToastContext);
}

export function ToastProvider({ children }) {
    const showToast = (message, options = {}) => {
        toast(message, options);
    };

    return (
        <ToastContext.Provider value={showToast}>
            <Toaster position="top-right" />
            {children}
        </ToastContext.Provider>
    );
}

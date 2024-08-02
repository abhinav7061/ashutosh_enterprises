import React from 'react';

const OnlineStatus = ({ isOnline, hasComeOnline, className }) => {

    return (
        <div className={`z-50 w-full ${className}`}>
            {!isOnline && (
                <div className="bg-red-500 text-white h-6 leading-6 text-sm text-center animate-fadeIn">
                    You are currently offline. Some features may not be available.
                </div>
            )}
            {hasComeOnline && (
                <div className="bg-green-500 text-white h-6 leading-6 text-sm text-center animate-fadeIn">
                    You are back online!
                </div>
            )}
        </div>
    );
};

export default OnlineStatus;

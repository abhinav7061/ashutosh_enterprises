"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';

const Dropdown = ({ button, dilogProperty = '', children, className = '', opened }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && true) {
            const targetElement = event.target;
            const hasEventListeners = !!(
                targetElement.onclick ||
                targetElement.onchange ||
                targetElement.onkeydown ||
                targetElement.onkeyup
            );
            if (!hasEventListeners) {
                setShowDropdown(false);
            }
        }
    }, [showDropdown]);

    useEffect(() => {
        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        if (opened) {
            opened(showDropdown);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    const handleButtonClick = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setShowDropdown(false);
        }
    };

    return (
        <div
            ref={dropdownRef}
            className={`text-center focus:outline-none ${className}`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={showDropdown}
        >
            <div onClick={handleButtonClick} aria-controls="dropdown-menu">
                {button}
            </div>
            {showDropdown && (
                <div id="dropdown-menu" className={`z-20 overflow-auto bg-transparent ${dilogProperty}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

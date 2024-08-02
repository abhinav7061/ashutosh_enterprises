import React from 'react'

const Button = ({ icon, title, className, type = "button", onClick }) => {
    return (
        <button
            type={type}
            className={`px-4 py-3 rounded-md flex items-center justify-center gap-2 text-white ${className}`}
            onClick={onClick}
        >
            {icon && <span>
                {icon}
            </span>}
            <p>{title}</p>
        </button>
    )
}

export default Button
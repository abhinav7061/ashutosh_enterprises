import React from 'react'

const Heading = ({ title, className }) => {
    return (
        <h2 className={`text-2xl font-semibold text-slate-900 dark:text-slate-200 ${className}`}>{title}</h2>
    )
}

export default Heading
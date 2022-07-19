import React from 'react'
import { useState } from 'react'
import './filter-form.scss'

function Filteritem({filter, filterValue, handleClick}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <button 
            onClick={() => {
                handleClick(filter, filterValue)
                setIsActive(!isActive)
            }} 
            className={isActive ? "filters__item active" : "filters__item"}
        >
            {filterValue}
        </button>)
}

export default Filteritem
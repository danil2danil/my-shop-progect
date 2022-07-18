import React from 'react'
import { useState } from 'react'

function Filteritem({filter, filterValue, handleClick}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <button 
            onClick={() => {
                handleClick(filter, filterValue)
                setIsActive(!isActive)
            }} 
            style={{ background: isActive ? "violet" : "orange" , padding: 10 }}
        >
            {filterValue}
        </button>)
}

export default Filteritem
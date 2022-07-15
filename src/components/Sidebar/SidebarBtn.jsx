import React from 'react'
import { FiMenu } from 'react-icons/fi'
import {toogleSidebar} from '../../redux/sidebarSlise'
import { useDispatch } from 'react-redux'

function SidebarBtn() {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toogleSidebar())
    }

    return (
        <>
            <FiMenu onClick={handleClick} className='sidebar__menu-btn' />
        </>
    )
}

export default SidebarBtn
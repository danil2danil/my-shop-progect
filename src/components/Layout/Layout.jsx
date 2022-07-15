import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import SidebarMini from '../Sidebar/SidebarMini'
import { useSelector } from 'react-redux'

function Layout() {

    const isSidebarActive = useSelector((state) => state.sidebar.isActive)
    return (
        <>
            {isSidebarActive ? <Sidebar/> : <SidebarMini/>}
            <div className="app-content">
                <Outlet />
            </div>
        </>
    )
}

export default Layout
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
        <div className="wrapper">
            <Sidebar />
            <Outlet />
        </div>
    </>
)
}

export default Layout
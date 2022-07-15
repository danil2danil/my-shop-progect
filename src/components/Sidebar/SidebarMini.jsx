import React from 'react'
import "./sidebar.scss"
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-ico.png'
import { FiHome } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import SidebarBtn from './SidebarBtn'
import {BsShop} from 'react-icons/bs'



function SidebarMini() {
    return (
        <div className="sidebar mini">
            <div className="sidebar__header">
                <SidebarBtn />
                <div className="sidebar__logo-container">
                    <img className='sidebar__logo' src={Logo} alt="Logo" />
                </div>
            </div>
            <nav className="sidebar__nav">
                <NavLink className="sidebar__nav-link" to="/" >
                    <FiHome className='sidebar__nav-ico' />
                </NavLink>
                <NavLink className="sidebar__nav-link" to="/cart">
                    <FiShoppingCart className='sidebar__nav-ico' />
                </NavLink>
                <NavLink className="sidebar__nav-link" to="/market">
                    <BsShop className='sidebar__nav-ico' />
                </NavLink>
            </nav>
        </div>
    )
}

export default SidebarMini
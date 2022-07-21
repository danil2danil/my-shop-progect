import React from 'react'
import "./sidebar.scss"
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-ico.png'
import { FiHome } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import SidebarBtn from './SidebarBtn'
import {BsShop} from 'react-icons/bs'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <SidebarBtn />
                <div className="sidebar__logo-container">
                    <img className='sidebar__logo' src={Logo} alt="Logo" />
                    <h1 className="sidebar__logo-text">Beezee</h1>
                </div>
            </div>
            <nav className="sidebar__nav">
                <NavLink className="sidebar__nav-link" to="/" >
                    <FiHome className='sidebar__nav-ico' />
                    <p className="sidebar__nav-title">Главная</p>
                </NavLink>
                <NavLink className="sidebar__nav-link" to="/cart">
                    <FiShoppingCart className='sidebar__nav-ico' />
                    <p className="sidebar__nav-title">Оформить заказ</p>
                </NavLink>
                <NavLink className="sidebar__nav-link" to="/market">
                    <BsShop className='sidebar__nav-ico' />
                    <p className="sidebar__nav-title">Магазин</p>
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar
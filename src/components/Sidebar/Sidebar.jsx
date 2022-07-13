import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-ico.png'
import MenuBtn from '../../assets/menu-btn.png'
import { FiHome } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'


function Sidebar() {
    return (
        <div className='sidebar'>
            <FiMenu className='sidebar__menu-btn' />
            <div className="sidebar__logo-container">
                <img className='sidebar__logo' src={Logo} alt="Logo" />
                <h1 className="sidebar__logo-text">Beezee</h1>
            </div>
            <nav className="sidebar__nav">
                <Link to="/">
                    <div className="sidebar__nav-item">
                        <FiHome className='sidebar__nav-ico' />
                        <p className="sidebar__nav-title">Главная</p>
                    </div>
                </Link>
                <div className="sidebar__nav-item">
                        <FiShoppingCart className='sidebar__nav-ico' />
                        <p className="sidebar__nav-title">Главная</p>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
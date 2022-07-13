import React from 'react'
import "./sidebar.scss"
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to="/">Главная</Link>
            <Link to="/cart">Корзина</Link>
        </div>
    )
}

export default Sidebar
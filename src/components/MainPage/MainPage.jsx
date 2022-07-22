import React from 'react'
import Slider from '../Slider/Slider'
import './main-page.scss'
import Logo from '../../assets/logo-ico.png'
import { Link } from 'react-router-dom'

function MainPage() {
    const sliderWidth = () => {
        return (Math.min(1920, window.innerWidth - 88))
    }

    return (
        <div className='main'>
            <div className="main-blur">
                <div className="main__logo-wrapper">
                    <img className='main__logo' src={Logo} alt="" />
                    <div className="main__logo-inner">
                        <h1 className="main__logo-title">BeeZee</h1>
                        <p className='main__logo__subtitle'>Твой лучший помощник в выборе беговой обуви</p>
                    </div>
                </div>
                <Link to='/market'><button className='main__btn'>За покупками!</button></Link>
            </div>
        </div>
    )
}

export default MainPage
import React from 'react'
import { useSelector } from 'react-redux'
import './popup-cart.scss'

function PopupCart() {

    const cart = useSelector((state) => state.products.cart)
    const totalPrise = ()=>{
        let temp = 0
        cart.forEach(element => {
            temp += element.product.prise
        });
        return temp
    }

    return (
        <div className="popup">
            <h2 className="popup__title">Корзина</h2>
            <div className="popup__names">
                <p className="popup__names-item">Название</p>
                <p className="popup__names-item">Размер</p>
                <p className="popup__names-item">Цена</p>
            </div>
            {cart.map(item => {
                return (
                    <div className="popup__item">
                        <img className='popup__item-img' src="" alt="cart-img" />
                        <h4 className="popup__item-title">{item.product.title}</h4>
                        <p className='popup__item-size'>{item.sizeValue}</p>
                        <h3 className="popup__item-prise">{item.product.prise}</h3>
                    </div>
                )
            })}
            <div className="popup__total">
                <h2 className="popup__total-title">Итого:</h2>
                <h3 className="popup__total-prise">{totalPrise()}</h3>
            </div>
        </div>
    )
}

export default PopupCart
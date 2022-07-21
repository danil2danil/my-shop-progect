import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './popup-cart.scss'
import { BsTrash } from 'react-icons/bs'
import { deleteItemInCart } from '../../redux/productsSlise'
import { Link } from 'react-router-dom'

function PopupCart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.products.cart)
    const totalPrise = () => {
        let temp = 0
        cart.forEach(element => {
            temp += element.product.prise
        });
        return temp
    }

    const isPopupActive = useSelector((state)=>state.popup.isPopupActive)

    const handleClick = (id, size) => {
        dispatch(deleteItemInCart({ id: id, size: size }))
    }

    return (
        <div className={isPopupActive ? "popup active" : "popup"}>
            <h2 className="popup__title">Корзина</h2>
            <div className="popup__names">
                <p className="popup__names-item">Название</p>
                <p className="popup__names-item">Размер</p>
                <p className="popup__names-item">Цена</p>
            </div>
            {cart.map(item => {
                return (
                    <div key={item.product.id} className="popup__item">
                        <img className='popup__item-img' src="" alt="cart-img" />
                        <h4 className="popup__item-title">{item.product.title}</h4>
                        <p className='popup__item-size'>{item.sizeValue}</p>
                        <h3 className="popup__item-prise">{item.product.prise}р</h3>
                        <BsTrash style={{ width: 22, height: 22, cursor: "pointer" }} onClick={() => handleClick(item.product.id, item.sizeValue)} />
                    </div>
                )
            })}
            {totalPrise() === 0 ? "В корзине нет товаров" : ""}
            <div className="popup__total">
                <h2 className="popup__total-title">Итого: </h2>
                <h3 className="popup__total-prise">{totalPrise()}р</h3>
            </div>
            <Link to='/cart'><button className='popup__submit'>Оформить заказ</button></Link>
        </div>
    )
}

export default PopupCart
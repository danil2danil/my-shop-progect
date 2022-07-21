import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import './cart.scss'
function Cart() {

    const cartItems = useSelector((state) => state.products.cart)

    const totalPrise = () => {
        let sum = 0
        cartItems.forEach(element => {
            sum += element.product.prise
        });
        return sum
    }

    return (
        <section className='cart'>
            <h1 className="cart__title">Оформление заказа</h1>
            <div className="cart__inner">
                <div className="cart__form">
                    <h2 className="cart__subtitle">Данные заказа</h2>
                    <p className='cart__form-description'>Номер телефона</p>
                    <input className='cart__form-input cart__form-input--number' type="text" placeholder='+7 987 071-31-63' />
                    <p className='cart__form-description'>Адрес доставки</p>
                    <input className='cart__form-input cart__form-input--adres' type="text" placeholder='Населенный пункт\город, улица, дом, квартира' />
                    <p className='cart__form-description'>Почтовый индекс</p>
                    <input className='cart__form-input cart__form-input--postindex' type="text" placeholder='Почтовый индекс' />
                    <label className='cart__form-checkbox' htmlFor="sdec"><input type="checkbox" id='sdec' />СДЕК</label>
                    <label className='cart__form-checkbox' htmlFor="post-russia"><input type="checkbox" id='post-russia' />Почта России</label>
                    <button className='cart__pay-btn'>Оплатить</button>
                </div>
                <div className="cart__items">
                    <h2 className="cart__subtitle">Выбранные товары</h2>
                    {cartItems.length === 0 ?
                        <div className="cart-alert">
                            <p>Корзина пуста</p>
                            <Link to='/market'>Перейти к покупкам</Link>
                        </div>
                        : 
                        ""
                    }
                    {cartItems.map((item) => {
                        return (
                            <CartItem key={Math.random()} item={item} />
                        )
                    })}
                    <div className="cart__total">
                        <h3 className="cart__total-title">Всего товаров: {cartItems.length} шт.</h3>
                        <h3 className="cart__total-title cart__total-title--sum">Сумма заказа: {totalPrise()}р</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
import React from 'react'
import './cart.scss'


function CartItem({item}) {
  return (
    <div className="cart__item">
      <img className='cart__item-img' src={item.product.images[0]} alt="item-img" />
      <h3 className="cart__item-title">{item.product.title} <span className='cart__item-size'>({item.sizeValue}см)</span></h3>
      <h2 className="cart__item-prise">{item.product.prise}р</h2>
    </div>
  )
}

export default CartItem
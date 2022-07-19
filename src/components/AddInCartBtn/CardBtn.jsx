import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemImCart } from '../../redux/productsSlise'
import './card-btn.scss'

function CardBtn({ sizeValue, product }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.products.cart)

    const handleClick = () => {
        if (sizeValue !== "") {
            dispatch(addItemImCart({ product, sizeValue }));
        }
        else {
            alert("Выберите размер!")
        }
    }

    const isProductInCart = () => cart.some(item=> item.product == product && item.sizeValue == sizeValue)


    return (
        <button
            className={ isProductInCart() ? "btn disabled" : "btn" }
            onClick={handleClick}
            disabled = {isProductInCart()}
        >
            {isProductInCart() ? "В корзине" : "Добавить в корзину" }
        </button>
    )
}

export default CardBtn
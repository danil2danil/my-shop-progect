import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemImCart } from '../../redux/productsSlise'
import './card-btn.scss'

function CardBtn({ sizeValue, product }) {
    const [isProductInCart, setIsProductInCart] = useState(false)
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.products.cart)

    const handleClick = () => {
        if (sizeValue !== "") {
            dispatch(addItemImCart({ product, sizeValue }));
        }
        else {
            alert("Выберите размер!")
        }
    }

    return (
        <button
            className="primary"
            onClick={handleClick}
        >
            Добавить в корзину
        </button>
    )
}

export default CardBtn
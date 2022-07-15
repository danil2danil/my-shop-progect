import React from 'react'
import {useDispatch} from 'react-redux'
import { addItemImCart } from '../../redux/productsSlise'
import './card-btn.scss'

function CardBtn({product}) {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(addItemImCart(product))
    }

    return (
    <button 
        className="card__btn"
        onClick={handleClick}
    >
        Добавить в корзину
    </button>
    )
}

export default CardBtn
import React from 'react'
import {useDispatch} from 'react-redux'
import { addItemImCart } from '../../redux/productsSlise'
import './card-btn.scss'

function CardBtn({sizeValue, product}) {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(addItemImCart({product, sizeValue}));
    }

    return (
    <button 
        className="card__btn"
        onClick={handleClick}
    >
        добавить в корзину
    </button>
    )
}

export default CardBtn
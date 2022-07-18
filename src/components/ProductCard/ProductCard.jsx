import React from 'react'
import CardBtn from '../AddInCartBtn/CardBtn'
import './product-card.scss'
import { useState } from 'react'
import ProductSizes from './ProductSizes'

function ProductCard({ product }) {
    const { title, prise, sizes, art } = product
    const [sizeValue, setSizeValue] = useState('')
    const handleChangeSize = (event) => {
        setSizeValue(event.target.value)
    }

    return (
        <div className="card">
            <img className='card__image' src="" alt="card-img" />
            <h3 className="card__title">{title}</h3>
            <p className='card__art'>АРТ: {art}</p>
            <h2 className="card__prise">{prise}p.</h2>
            <div className='card__decoration'>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
            </div>
            <p className='card__size-area'>
                Выбрать размер: <ProductSizes style={{ style: "card__sizes" }} handleChangeSize={handleChangeSize} sizes={sizes} />
            </p>
            <CardBtn sizeValue={sizeValue} product={product} />
        </div>
    )
}

export default ProductCard
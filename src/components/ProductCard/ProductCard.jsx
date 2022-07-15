import React from 'react'
import CardBtn from '../AddInCartBtn/CardBtn'
import './product-card.scss'

function ProductCard({ product }) {
    const { title, prise } = product
    return (
        <div className="card">
            <img className='card__image' src="" alt="card-img" />
            <h3 className="card__title">{title}</h3>
            <h2 className="card__prise">{prise}</h2>
            <CardBtn product={product} />
        </div>
    )
}

export default ProductCard
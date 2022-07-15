import React from 'react'
import CardBtn from '../AddInCartBtn/CardBtn'

function ProductCard({product}) {
    const {title, prise} = product
  return (
        <div className="card">
            <img className='card__image' src="" alt="card-img" />
            <div className="card__inner">
                <h3 className="card__title">{title}</h3>
                <h2 className="card__prise">{prise}</h2>  
                <CardBtn product={product}/>
            </div>
        </div>
    )
}

export default ProductCard
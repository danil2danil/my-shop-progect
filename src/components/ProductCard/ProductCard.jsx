import React from 'react'
import CardBtn from '../AddInCartBtn/CardBtn'
import './product-card.scss'
import { useState } from 'react'
import ProductSizes from './ProductSizes'

function ProductCard({ product }) {
    const { title, prise, sizes, art } = product
    const [preCartProducts, setPreCartProducts]=useState([])
    
    const handleChoseProduct= (size)=>{
        let preCartProduct = [{
            title: title,
            price: prise,
            size: size,
            art: art,
        }]
        setPreCartProducts(preCartProducts.concat(preCartProduct))
    }

    return (
        <div className="card">
            <img className='card__image' src="" alt="card-img" />
            <h3 className="card__title">{title}</h3>
            <h2 className="card__prise">{prise}</h2>
            <p className='card__art'>АРТ: {art}</p>
            <div className="card__sizes">
                {sizes.map((item) => { 
                    return (
                       <ProductSizes item={item} onClick={handleChoseProduct}/>
                    )
                })}
            </div>
            <CardBtn product={preCartProducts} />
        </div>
    )
}

export default ProductCard
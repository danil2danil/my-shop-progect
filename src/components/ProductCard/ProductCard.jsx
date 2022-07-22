import React from 'react'
import CardBtn from '../AddInCartBtn/CardBtn'
import './product-card.scss'
import { useState } from 'react'
import ProductSizes from './ProductSizes'
import Slider from '../Slider/Slider'

function ProductCard({ product }) {
    const { title, prise, sizes, art, specialization, waterproof, images } = product
    const [sizeValue, setSizeValue] = useState('')
    const handleChangeSize = (event) => {
        setSizeValue(event.target.value)
    }

    return (
        <div className="card">
            <Slider width={450} images={images} buttons={true}/>
            <h3 className="card__title">{title}</h3>
            <p className='card__art'>АРТ: {art}</p>
            <div className='card__specialization'>
                {specialization.map((item) => {
                    return (<div key={item} className='card__specialization-item'>{item}</div>)
                })}
                {waterproof==="Да" ? "Влагостойкие" : ""}
            </div>
            <div className='card__decoration'>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
                <span className='card__decoration-item'></span>
            </div>
            <p className='card__sizes-list'>
            Размеры в наличии: {sizes.map((item) => {
                    return (<span key={item} className='card__sizes-list-item'>{item}cм </span>)
                })}
            </p>
            <h2 className="card__prise">{prise}p.</h2>
            <div className='card__size-area'>
                Выбрать размер: <ProductSizes style={{ style: "card__sizes" }} handleChangeSize={handleChangeSize} sizes={sizes} />
            </div>
            <CardBtn sizeValue={sizeValue} product={product} />
        </div>
    )
}

export default ProductCard
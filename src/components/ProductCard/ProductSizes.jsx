import React from 'react'
import './product-card.scss'

function ProductSizes({handleChangeSize, sizes, style }) {

    return (
        <select className={style.style} onChange={handleChangeSize}>
            <option className={`${style.style}__item`} value=""></option>
            {sizes.map((item) => {
                return (
                    <option className={`${style.style}__item`} value={item}>{item}</option>
                )
            })}
        </select>
    )
}

export default ProductSizes
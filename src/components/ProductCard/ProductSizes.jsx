import React from 'react'
import { useState } from 'react'
import './product-card.scss'

function ProductSizes({ handleChangeSize, sizes }) {

    return (
        <select onChange={handleChangeSize}>
            {sizes.map((item) => {
                return (
                    <option value={item}>{item}</option>
                )
            })}
        </select>
    )
}

export default ProductSizes
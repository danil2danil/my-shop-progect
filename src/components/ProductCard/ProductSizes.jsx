import React from 'react'
import { useState } from 'react'
import './product-card.scss'

function ProductSizes({ onClick, item }) {
    const [isSizeChozed, setIsSizeChosed] = useState(false)

    return (
        <>
            <div
                className={isSizeChozed ? "card__sizes-item chosed" : "card__sizes-item"}
                onClick={() => {
                    onClick(item)
                    setIsSizeChosed(!isSizeChozed)
                }}
            >
                {item}
            </div>
        </>
    )
}

export default ProductSizes
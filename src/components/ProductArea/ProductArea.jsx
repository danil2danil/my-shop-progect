import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/productsSlise';
import ProductCard from '../ProductCard/ProductCard';
import './product-area.scss'
import PopupCart from '../PopupCart/PopupCart'


function ProductArea() {
    const productList = useSelector((state) => state.products.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData())
    }, []);
    return (
        <>
            <section className='products'>
                <PopupCart/>
                {productList.map((item) => {
                    return (
                        <ProductCard key={item.id} product={item} />
                    )
                })}
            </section>
        </>
    )
}

export default ProductArea
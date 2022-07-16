import React from 'react'
import {useSelector} from 'react-redux' 
function Cart() {

    const cartItems = useSelector((state)=>state.products.cart)
    
    return (
        <section className='cart'>
            {cartItems.map((item)=>{
                return(
                <>
                    <h1>{item.title}</h1>
                    <h2>{item.prise}</h2>
                    <h3>{item.size}</h3>
                </>
                )
            })}
        </section>
    )
}

export default Cart
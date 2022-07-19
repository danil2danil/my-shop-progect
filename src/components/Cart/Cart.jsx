import React from 'react'
import {useSelector} from 'react-redux' 
import CartItem from './CartItem'
function Cart() {

    const cartItems = useSelector((state)=>state.products.cart)
    
    return (
        <section className='cart'>
            {cartItems.map((item)=>{
                return(
                    <CartItem />
                )
            })}
        </section>
    )
}

export default Cart
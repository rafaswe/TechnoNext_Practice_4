// import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleCartItem from './SingleCartItem'

const Cart = () => {

    const cartItems = useSelector((state)=>state.cart)
    // console.log(cartItems)


  return (
    <Container className='mt-3'>
        <h1 className='text-center my-auto'>My Cart</h1>
        <div className="row">
            <div className="col-12 ">
                {
                    cartItems.map((product,index)=>(
                        <SingleCartItem key={index} cartProduct={product}/>
                    ))}
            </div>
        </div>
    </Container>
  )
}

export default Cart
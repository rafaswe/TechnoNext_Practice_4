// import React from 'react'

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeSingleItem } from "../../store/reducers/cartSlice";

const SingleCartItem = ({cartProduct}) => {
    console.log(cartProduct)
    const dispatch= useDispatch();
    const {id,title,description,price,image,counter} = cartProduct
    const handleDelete =()=>{
        dispatch(removeFromCart(id))
        
    }
    const handleAddProduct =()=>{
        dispatch(addToCart(cartProduct))
    }
    const handleDecreament =()=>{
        dispatch(removeSingleItem(id))
    }
  return (
    <div className="row justify-content-center align-items-center g-5 my-3">

        <div className="col-1">
            <img src={image} alt={title} className='mx-auto w-100 h-100' />
        </div>
        <div className="col-7">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <Button onClick={()=>handleAddProduct()}>Increament</Button>
                <span>{counter}</span>
                <Button onClick={()=>handleDecreament()}>Decreament</Button>
            </div>
        </div>
        <div className="col-3 ms-auto">
        <Button variant="outline-success" onClick={()=>handleDelete()}>Remove</Button>{' '}
        </div>

    </div>
  )
}

export default SingleCartItem
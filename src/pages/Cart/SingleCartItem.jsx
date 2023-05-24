// import React from 'react'

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/reducers/cartSlice";

const SingleCartItem = ({cartProduct}) => {
    // console.log(cartProduct)
    const dispatch= useDispatch();
    const {id,title,description,price,image} = cartProduct
    const handleDelete =()=>{
        dispatch(removeFromCart(id))
    }
  return (
    <div className="row justify-content-center align-items-center g-5 my-3">

        <div className="col-1">
            <img src={image} alt={title} className='mx-auto w-100 h-100' />
        </div>
        <div className="col-7">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="col-3 ms-auto">
        <Button variant="outline-success" onClick={()=>handleDelete()}>Remove</Button>{' '}
        </div>

    </div>
  )
}

export default SingleCartItem
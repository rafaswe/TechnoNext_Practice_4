
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice';

const SingleProductLayout = ({product}) => {

    const dispatch= useDispatch();

    const {id,title,description,price,image} = product;


    const handleProductAdd = () =>{
        dispatch(addToCart(product))
    }
   
  return (
    <Card className='h-100 py-3'>
      <Card.Img variant="top" src={image} className='mx-auto' style={{width:"200px", height:"200px"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-center'>
      <Button variant="outline-danger" onClick={()=>handleProductAdd()}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default SingleProductLayout
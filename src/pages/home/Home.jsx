import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productSlice';
import SingleProductLayout from './SingleProductLayout';

const Home = () => {
    
    const {data,status} = useSelector((state)=> state.product);
    // const product = selector.product;
    console.log(data);
    const dispatch = useDispatch();


    useEffect(()=>{
        // axios.get("https://fakestoreapi.com/products")
        // .then(res=>{
        //               setData(res.data);
        //               // console.log(res.data);
        //           }). catch(err =>("Error = " + err.message))
        dispatch(fetchProducts());
    },[])



    if(status == "LOADING"){
      return <h2>Loading...</h2>
    }
    if(status == "ERROR"){
      return <h2>Something Went wrong</h2>
    }
  
  return (
    <Container className='mt-3 '> 
      <h1 className='text-center mb-4'>Home Page</h1>
   
        <div className="row g-3">

          {
        data.map(item => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={item.id}>
            <SingleProductLayout key={item.id} product={item}/>
            </div>
          
          
        ))}

        </div>
    </Container>
  )
}


export default Home
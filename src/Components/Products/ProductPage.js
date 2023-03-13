import React,{useContext} from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useParams } from 'react-router-dom'
import CartContext from '../store/cart-context'




const ProductPage = (props) => {
  const cartCtx = useContext(CartContext);
    const params = useParams();
     const newarray =props.product.filter(prod =>prod.id===params.storeid)
    const obj =newarray[0]
    console.log(params)
    const submitHandler=()=>{
      const newItem ={
        id: (obj.id),
        title : obj.title,
        price : (obj.price),
        imageUrl :obj.imageUrl,
        quantity : parseInt(1)

    }

    cartCtx.addItem(newItem)
    // console.log(newItem)

  }

  return (

    <Row style={{paddingTop : "10%"}} className='productpage-main container'>
    {/* {console.log(params.storeid, obj.imageUrl, obj.id)} */}
        <Col style={{"margin" :"0 auto"}}>
        <img src={obj.imageUrl} alt="ProductPage" width="90%" height="90%" />
        <button onClick={submitHandler} style={{width : "90%" , backgroundColor:"blue" , color:"white"}}>Buy Now</button>
        </Col>
        <Col className='pt-5 ps-5'> 
            <h3>Title : {obj.title}</h3> 
            <p style={{color : "green" , fontWeight:"bold"}}>Special Price</p>
            <h2>Price : Rs ${obj.price}/-</h2> 
            <div>23,453 Ratings and 1,765 Reviews</div> 
            <div>* Available offers</div>
            <div>* Buy With ICICI Bank credit card and get 10% discount</div>
            <div>* Buy With Indiusind Bank credit card and get 5% discount</div> 
            <div>* Buy With SBI Bank credit card and get 5% discount and save the money</div> 

        </Col>

    </Row>

  )

}




export default ProductPage
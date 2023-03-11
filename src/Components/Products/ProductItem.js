import React, { useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const ProductItem = (props) => {
    const price = `$${props.price}`
    const cartCtx = useContext(CartContext);
    const submitHandler = event => {
        event.preventDefault();
       

        cartCtx.addItem({
            id:props.id,
            title: props.title,
            price: props.price,
            quantity: props.quantity
        })

    }
    return <>

        <Card className="mt-3 mb-3">
            <Card.Header className="p-4 text-center">
                <h1>{props.title}</h1>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Card.Img src={props.src} />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between mt-3">
                        <span>{price}</span>
                        <Button onClick={submitHandler}>Add to Cart</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>
}
export default ProductItem;
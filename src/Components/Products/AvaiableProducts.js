import React from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col} from "react-bootstrap";
const DummyData = [
    {
        id:'p1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:1
    },
    {
        id:'p2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:1
    },
    {
        id:'p3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:1
    },
    {
        id:'p4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:1
    }
]

const AvailableProduct = (props)=> {
    return (
        <Container className="mt-3">
            <Row xs={1} md={2} className="g-10">
                {
                    DummyData.map((item)=>
                        <Col key={item.id}>
                            <ProductItem id={item.id} title={item.title} price={item.price} src={item.imageUrl} quantity={item.quantity} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}
export default AvailableProduct;
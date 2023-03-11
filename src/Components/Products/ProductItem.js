import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ProductItem = (props) => {
    const price = `$${props.price}`
    return <>
    <Container className="mt-3">
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card>
                    <Card.Header className="p-4 text-center">
                        <h1>{props.title}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Card.Img src={props.src}/>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <span>{price}</span>
                                <Button >Add to Cart</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</>
}

export default ProductItem;
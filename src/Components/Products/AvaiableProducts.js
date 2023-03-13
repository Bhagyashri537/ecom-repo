import React, { useEffect, useContext } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";
import CartContext from "../store/cart-context";
const DummyData = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const AvailableProduct = (props) => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const str = email.replace("@", "");
    const newstr = str.replace(".", "");

    fetch(
      ` https://crudcrud.com/api/16fda313040744e0b8c94cbdf94c9bf4/cart${newstr}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let totalAmount = 0;
        data.forEach((element) => {
          totalAmount += element.quantity * element.price;
        });
        cartCtx.setData(data, totalAmount);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Container>
      <Row>
        {DummyData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            src={item.imageUrl}
            quantity={item.quantity}
          />
        ))}
      </Row>
    </Container>
  );
};
export default AvailableProduct;

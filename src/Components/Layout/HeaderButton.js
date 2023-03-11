import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const HeaderButton = (props) => {
  const [itemCount, setItemCount] = useState(0);
  return (
   <>
    <Button>Cart {itemCount}</Button>
   </>
  );
};

export default HeaderButton;
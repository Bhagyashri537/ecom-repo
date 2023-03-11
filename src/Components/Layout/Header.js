import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderButton from './HeaderButton';

const Header = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark" className='justify-content-center'>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <HeaderButton onClick={props.onShow}/>
      </Navbar>
      <div
        style={{
          backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh'
        }}
      >
        <h1 style={{ fontSize: '100px', className:'mt-5' }}>The Generics</h1>
      </div>
    </>
  );
};
export default Header;
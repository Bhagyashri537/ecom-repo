import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderButton from './HeaderButton';
import {BrowserRouter as Router , Switch , Route , Link , Redirect } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Product from "../Products/Product";
import ProductPage from '../Products/ProductPage';


const Header = (props) => {
  return (
    <>
    <Router>
      <Navbar fixed="top" bg="dark" variant="dark" className='justify-content-center'>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/home'>Home</Nav.Link>
          <Nav.Link as={Link} to='/store'>Store</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
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
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path="/store" exact>
          <Product />
        </Route>
        <Route path="/about">
              <About />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/store/:storeid">
              <ProductPage key={props.product.id} product={props.product} />
            </Route> 
      </Switch>
      </Router>
    </>
  );
};
export default Header;
import Cart from  "../CartWidget/CartWidget";
import NoMercy from  "../Marca/Marca";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


function Navbarra () {
return (
<div> 
<div className="App bg-dark"> 
    <Navbar expand="lg">
      <Container fluid>
      <NoMercy/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav 
            className="me-auto my-2 my-lg-0 mx-auto letra"
            style={{ maxHeight: '130px' }}
          > 
          
             <a  className="navar" href="#action1">ROPA</a>
             <a className="navar" href="#action2">ZAPATILLAS</a>
             <a  className="navar" href="#action3">GORRAS</a>
            
          </Nav>
        
          <Form className="d-flex">
          <Cart/>
            <Form.Control
              type="search"
              placeholder="Buscar Producto"
              className="me-2"
              aria-label="Search"
            />
            <Button className="bg-dark btnr">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
</div>


)

}

export default Navbarra;
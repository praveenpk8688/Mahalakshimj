import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../Styles/MainNavbar.css'



function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid >
        <Navbar.Brand className='mainlogo' href="#">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mainNav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link className='navLinks ' style={{ marginLeft: '90px' }} href="#action1">All Jewellery</Nav.Link>
            <Nav.Link className='navLinks' href="#action1">Gold</Nav.Link>
            <Nav.Link className='navLinks' href="#action1">Silver</Nav.Link>
            <Nav.Link className='navLinks' href="#action1">Dimond</Nav.Link>
            <Nav.Link className='navLinks' href="#action1">Gift Store</Nav.Link>

          </Nav>
          <div className='navIcons'>
            <i className="fa-regular fa-user" style={{ color: '#ffffff', fontSize: '24px' }}></i>
            <i class="fa-regular fa-heart" style={{ color: "#ffffff", fontSize: '26px' }}></i>
            <i class="fa-solid fa-bag-shopping" style={{ color: "#ffffff", fontSize: '26px' }}></i>

            <Button variant=""><i class="fa-solid fa-magnifying-glass" style={{ color: "#ffffff", fontSize: '26px' }}></i></Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
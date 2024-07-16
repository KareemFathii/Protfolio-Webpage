import React, {  useState  , useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
   const [active , setActive ] = useState("home") 
   const [scrolled , setScrolled] = useState(false)

   useEffect(() => {
    const Scroll = () => {
      if(window.scrollY >= 50) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll" , Scroll)
    return () => window.removeEventListener("scroll",Scroll)
  }
  ,[]);
  return (
    
    <Navbar expand="lg"  className={scrolled ? "active" : ""}  >
      <Container >
        <Navbar.Brand  className='Brandname'  href="#home">Protfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="linksheader">
            <Nav.Link className='a' href="#home" > Home</Nav.Link>
            <Nav.Link className='a' href="#skills"> Skills</Nav.Link>
            <Nav.Link className='a' href="#projects"> Projects</Nav.Link>
            <div className='dataheader'>
             <div className='mediaHeader'>
           <Nav.Link href="https://www.linkedin.com/in/kareem-fathii/" target="_blank" rel="noopener noreferrer" ><div className='iconsHeader'> <FontAwesomeIcon className='iconmedia' icon={faLinkedinIn} size="lg" />  </div>
            </Nav.Link>
            <Nav.Link  href="https://www.facebook.com/kareem.fathy.127" target="_blank" rel="noopener noreferrer" > <div  className='iconsHeader'>  <FontAwesomeIcon className='iconmedia' icon={faFacebookF} size="lg" /></div>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/kareem_fathii/" target="_blank" rel="noopener noreferrer" >
            <div className='iconsHeader'><FontAwesomeIcon className='iconmedia' icon={faInstagram} size="lg" /></div>   </Nav.Link  >
             </div>
            <Nav.Link > <button className='ButtonHeader' onClick={()=> console.log("connected")}>  <span>let's connect</span>  </button>  </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
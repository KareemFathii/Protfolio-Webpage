import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {


    return (
        <section className='footersec'>
            {/* <div class=" p-5 bg-dark text-white rounded">
  
         <h2> hello ya welad el ahba </h2>
            
            
            
            </div> */}

        <div className="row">
             <div className="col-md-6 leftpartfooter">
                <h2 className='Brandname logofooter'> Protfolio </h2>
             </div>

            <div className="col-md-6 rightpartfooter">
            <div className='mediaHeader mediafooter'>
           <Nav.Link href="https://www.linkedin.com/in/kareem-fathii/" target="_blank" rel="noopener noreferrer" ><div className='iconsHeader iconfooter '> <FontAwesomeIcon className='iconmedia ' icon={faLinkedinIn} size="lg" />  </div>
            </Nav.Link>
            <Nav.Link  href="https://www.facebook.com/kareem.fathy.127" target="_blank" rel="noopener noreferrer" > <div  className='iconsHeader iconfooter'>  <FontAwesomeIcon className='iconmedia ' icon={faFacebookF} size="lg" /></div>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/kareem_fathii/" target="_blank" rel="noopener noreferrer" >
            <div className='iconsHeader iconfooter'><FontAwesomeIcon className='iconmedia' icon={faInstagram} size="lg" /></div>   </Nav.Link  >
             </div>
             <p>--Copyrights 2024--All Rights Reserved here by Kareem Fathii Mohamed</p>

            </div>
        </div>

        </section>
        

    )
}
export default Footer ;
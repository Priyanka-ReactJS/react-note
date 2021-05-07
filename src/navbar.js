import React from 'react';
import {Navbar} from 'react-bootstrap'

const NavbarComp = () => {
  return(
      <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      Note Book
    </Navbar.Brand>
     </Navbar>
      </div>
 
  )
}

export default NavbarComp;








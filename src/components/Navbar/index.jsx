import React, { useState } from 'react';
import { Nav, NavLogo, NavMF, NavMFIcon, NavMFP } from './Navbar-styled';
import WealthyLogo from '../../images/wealthy-logo.png';
import MF from '../../images/MF.png';

const Navbar = ({scrollPosition}) => {

 
  // if (window.screen.width <= 500 &&  ){

  // }

  return (  
    <Nav style={scrollPosition > 1 && window.screen.width <=500 ? { boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" } : {}}>
        <NavLogo src={WealthyLogo} />

        <NavMF >
          <NavMFIcon src={MF} />
          <NavMFP>Mutual Fund</NavMFP>
        </NavMF>
        

    </Nav>
  )
}

export default Navbar;
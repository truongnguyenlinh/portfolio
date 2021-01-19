import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Typical from 'react-typical';
import { animateScroll as scroll} from 'react-scroll';
import resume from "../../../src/files/resume.pdf";
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks 
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav= () => {
      if(window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };
    
    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Typical
              steps={[1500, "Linh Truong", 1000]}
              loop={Infinity}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact={"true"} 
                offset={-80}>
                  About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="project1" 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact={"true"} 
                  offset={-80}>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to="route"
                onClick={(event) => { event.preventDefault(); window.open(resume, "_self");}}
                >Resume</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>  
      </>
    )
}

export default Navbar;

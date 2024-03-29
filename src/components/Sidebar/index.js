import React, { useState, useEffect } from 'react';
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper,  
  SidebarMenu, 
  SidebarLink 
} from './SidebarElements';
import resume from "../../../src/files/resume.pdf";

const Sidebar = ({ isOpen, toggle }) => {
  const [scrollSidebar, setScrollSidebar] = useState(false);

  const changeSidebar = () => {
    if(window.scrollY >= 80) {
      setScrollSidebar(true);
    } else {
      setScrollSidebar(false);
    }
  };

    useEffect(() => {
      window.addEventListener('scroll', changeSidebar)
    }, []);

  return (
    <>
      <SidebarContainer scrollSidebar={scrollSidebar} isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink 
            to="about" 
            onClick={toggle}
            smooth={true} 
            duration={500} 
            spy={true} 
            exact={"true"} 
            offset={-80}>
              About
            </SidebarLink>
            <SidebarLink 
            to="projects" 
            onClick={toggle}
            smooth={true} 
            duration={500} 
            spy={true} 
            exact={"true"} 
            offset={-80}>
              Projects
            </SidebarLink>
            <SidebarLink to="route" onClick={() => { window.open(resume, "_blank"); }}>
              Resume
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;

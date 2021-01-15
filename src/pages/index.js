import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import { projObjOne } from '../components/ProjectsSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} {...projObjOne}/>
      <AboutSection/>
      <ProjectsSection {...projObjOne}/>
    </>
  )
};

export default Home

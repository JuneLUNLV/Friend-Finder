
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
  
const ScrollToTopButton = () =>{
  
let scrollToTop = () => {}
if (typeof window !== 'undefined') {
    scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
  }

  
  return (
    <Button style={{"right":"1vw","bottom":"2vh","position":"fixed","width":"45px","display":"flex","fontSize":"30px","borderRadius":"100%"}}>
     <FaArrowCircleUp onClick={scrollToTop}></FaArrowCircleUp>
    </Button>
  );
}
  
export default ScrollToTopButton;
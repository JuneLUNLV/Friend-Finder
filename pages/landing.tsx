import Head from 'next/head'
import { useRouter } from 'next/router'
import {useState,useEffect,useRef} from 'react'
import NavBar from '../src/components/NavBar'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


import type { NextPage } from 'next'
import { Container, Button } from 'react-bootstrap';
import {FaFacebook,FaTwitter,FaGoogle,FaInstagram,FaTelegram,FaMedium, FaDiscord} from 'react-icons/fa'

let img_links: Array<string> = [
  "https://randomuser.me/api/portraits/men/26.jpg",
  "https://randomuser.me/api/portraits/women/01.jpg",
  "https://randomuser.me/api/portraits/women/02.jpg",
  "https://randomuser.me/api/portraits/man/02.jpg",
  "https://randomuser.me/api/portraits/man/03.jpg",
  "https://randomuser.me/api/portraits/man/04.jpg",
  "https://randomuser.me/api/portraits/women/05.jpg",
  "https://randomuser.me/api/portraits/women/06.jpg",
  "https://randomuser.me/api/portraits/women/07.jpg",
  "https://randomuser.me/api/portraits/man/08.jpg",
  "https://randomuser.me/api/portraits/man/09.jpg",
]


const Landing: NextPage = (props) => {

  const router = useRouter();
  const { username } = router.query;
  const fullpageRef:any = useRef()
  return(
    <>
      <Head>
        <title>Friend Finder | Landing Page</title>
      </Head>

    <NavBar landingMode={true}/>
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    ref={fullpageRef}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper >
          <div className="section" >
            <Container>
              <div style={{display:'flex'}}>
                <div style={{width:'50%',direction:'rtl'}}>
                  <img src="/img/landing1.png" width="648"></img>
                </div>
                <div style={{display:'flex',width:'50%',flexDirection:'column',paddingLeft:'100px',justifyContent:'center'}}>
                    <div style={{display:'flex',marginBottom:'20px',alignItems:'center',width:'100%'}}>
                    <img src="/img/people.png" width="50px" height="50px"></img>
                      <h1 style={{margin:'0px 15px',"color":"#000000","fontFamily":"\"Montserrat\", Sans-serif","fontSize":"40px","fontWeight":"500","lineHeight":"1.3em"}}>Find Your Friends Here!</h1>

                    </div>

                    <p style={{color:'#7a7a7a'}}>Find interesting people and become their friends. Our commounity has more than 5 millions active users. You can find many good friends and groups which you can share the same interesting things! You are also welcome to create your own groups! </p>
                    <div style={{marginTop:'50px'}}></div>
                    <Button 
                    onClick={()=>{router.push('/')}}
                    style={{"fontFamily":"\"Montserrat\", Sans-serif","fill":"#ffffff","color":"#ffffff","backgroundColor":"#0d6efd","borderStyle":"solid","borderWidth":"1px 1px 1px 1px","borderColor":"#00a7c1","borderRadius":"50px 50px 50px 50px","boxShadow":"rgb(13 110 253 / 38%) 0px 10px 30px",width:'fit-content',whiteSpace:'pre-wrap'}}>Launch App   ➤</Button>
                </div>
              </div>
            </Container>
            <div style={{display:'flex',justifyContent:'center',marginTop:'150px',backgroundColor:'#f8f9fa',padding:'75px 0px',width:'100vw'}}>
                  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'30%'}}>
                    <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontWeight":"100",fontSize:'69px',color:'#0d6efd'}}>
                      2M+
                    </h5>
                    <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontSize":"17px",color:'#54595f'}}>
                      Individuals
                    </h5>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'30%'}}>
                  <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontWeight":"100",fontSize:'69px',color:'#0d6efd'}}>
                      5k+
                    </h5>
                    <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontSize":"17px",color:'#54595f'}}>
                      Visits per day
                    </h5>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'30%'}}>
                    <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontWeight":"100",fontSize:'69px',color:'#0d6efd'}}>
                      200M+
                      </h5>
                      <h5 style={{"fontFamily":"\"Montserrat\", Sans-serif","fontSize":"17px",color:'#54595f'}}>
                        Total Search
                      </h5>
                  </div>
                </div>
                <div style={{display:'flex',width:"100%",justifyContent:'center',position:'absolute',bottom:'0px'}}>
                  <img src="https://i.ibb.co/Bs9xGdV/arrow-icon.png" alt="Next Section Arrow" id="moving-arrow" width="100px" className="arrow" onClick={()=>{fullpageRef.current.fullpageApi.moveSectionDown()}}/>
                </div>

          </div>
          <div className="section" >
            <Container>
              <div style={{display:'flex'}}>
                <div style={{width:'50%',direction:'rtl'}}>
                  <img src="/img/landing2.png" width="648"></img>
                </div>
                <div style={{display:'flex',width:'50%',flexDirection:'column',paddingLeft:'100px',justifyContent:'center'}}>
                    <h1 style={{"color":"#000000","fontFamily":"\"Montserrat\", Sans-serif","fontSize":"40px","fontWeight":"500","lineHeight":"1.3em",marginBottom:'20px'}}>About Us</h1>
                    <p style={{color:'#7a7a7a'}}>We are web developers who love to meet people and make friends. Join us now and together we will create a great product. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div style={{marginTop:'50px'}}></div>
                    <div style={{borderTop:"1px solid #ebb0e7",width:'220px'}}></div>
                    <div style={{display:'flex',gap:'20px',fontSize:'20px'}}>
                      <div style={{cursor:'pointer'}}>
                        <FaFacebook/>
                      </div>
                      <div style={{cursor:'pointer'}}>
                        <FaGoogle/>
                      </div>
                      <div style={{cursor:'pointer'}}>
                        <FaInstagram/>
                      </div>
                      <div style={{cursor:'pointer'}}>
                        <FaMedium/>
                      </div>
                      <div style={{cursor:'pointer'}}>
                        <FaTwitter/>
                      </div>
                      <div style={{cursor:'pointer'}}>
                        <FaDiscord/>
                      </div>
                    </div>
                </div>
              </div>
            </Container>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
    </>
  )


}

export default Landing;

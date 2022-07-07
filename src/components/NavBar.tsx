import { Button,Navbar,Nav,Container, Offcanvas,NavDropdown, Form, FormControl } from 'react-bootstrap'
import React, { useState,useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {setSearchBarValue,selectNavBarSearchValue} from './NavBarSlice';
import { setLastVisitedOpen } from './PeopleSlice';
import { useRouter } from 'next/router';


const NavBar = (props:any) => {
    const searchBarValue = useAppSelector(selectNavBarSearchValue);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [searchValue,setSearchValue] = useState("")

    // const handleSearchValueChange = (event) => {
    //     setSearchValue(event.)
    // }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(setSearchBarValue(searchValue))
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
    }, [searchValue])

    return(
        <Navbar collapseOnSelect expand="md" bg="light" className="mb-3" fixed="top">
        <Container>
        <Navbar.Brand href="#">
                <img src={"/img/people.png"} style={{width:'40px',height:'40px'}}></img>
                Friend Finder
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto me-4">

            {
                props.landingMode ?
                <Button variant="outline-primary" className="me-2" onClick={()=>{router.push('/')}}>APP</Button>
                :
                <>
                    <Button variant="outline-primary" className="me-2" onClick={()=>{router.push('/landing')}}>Landing Page</Button>
                    <Button type="submit" onClick={()=>{dispatch(setLastVisitedOpen(true))}}>Last Visited Profiles</Button>
                </>

            }

            </Nav>
            { 
                props.landingMode ?
                <></>
                :
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="John Doe"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    />
                </Form> 
        }

        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;
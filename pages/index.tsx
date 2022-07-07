import type { NextPage } from 'next'
import Head from 'next/head'
import { Button,Navbar,Nav,Container, Offcanvas,NavDropdown, Form, FormControl, Card, Row, Col,Spinner, ListGroup, ListGroupItem, } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from '../src/components/NavBar'
import PersonCard from '../src/components/PersonCard'
import CustomCol from '../src/components/common/CustomCol'
import { Person } from '../src/types/Person';
import findPersonByUsername from '../src/utils/findPersonByUserName';


import {useState,useEffect} from 'react'
import { useAppSelector,useAppDispatch } from '../src/app/hooks';
import {selectNavBarSearchValue} from '../src/components/NavBarSlice';
import { selectPeopleList,selectlastVisitedOpen,appendPeopleList,setLastVisitedOpen,selectPeopleClickedList } from '../src/components/PeopleSlice';
import ScrollToTopButton from '../src/components/common/ScrollToTop';



const names : Array<string> = [];
const PersonFinder: NextPage = () => {
  const dispatch = useAppDispatch();

  const peopleClickedList = useAppSelector(selectPeopleClickedList);
  const searchBarValue = useAppSelector(selectNavBarSearchValue);
  const peopleList = useAppSelector(selectPeopleList);
  const lastVisitedOpen = useAppSelector(selectlastVisitedOpen);


  const [loading,setLoading] = useState(true);
  const [peopleListToDisplay,setPeopleListToDisplay] = useState<Array<Person>>([]);
  const [hasMore,setHasMore] = useState(true);



  const refreshDisplay = () => {
    const temp_list:Array<Person> = [];
    if(searchBarValue.length <= 0){
      setPeopleListToDisplay(peopleList)
      return;
    }
    else{
      names.map((name,index)=>{
        // console.log(`${name} includes ${searchBarValue} == ${name.includes(searchBarValue)}`)
        if(name.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase())){
          temp_list.push(peopleList[index]);
        }
      })
    }
    setPeopleListToDisplay(temp_list)
  }

  const getMorePeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=30");
    // if (!response.ok) {
    //   const message = `An error has occured: ${response.status}`;
    //   throw new Error(message);
    // }
    const parsedResponse = await response.json();
    const people = parsedResponse.results;
    for (const person of people) {
      names.push(`${person.name.first} ${person.name.last}`)
     }
     dispatch(appendPeopleList(people));
     if(peopleList.length >= 5000){
      setHasMore(false);
     }
  }

  useEffect(() => {
    const getPersonInfo = async () =>{
      setLoading(true);
      getMorePeople();
      setLoading(false);
    }
    getPersonInfo();
  }, []);

  useEffect(() => {
    setLoading(true);
    refreshDisplay();
    setLoading(false);
  }, [searchBarValue,peopleList]);


  // useEffect(()=>{
  //   console.log("refreshed")
  // })

  return (
    <>
      <Head>
        <title>Friend Finder | APP</title>
      </Head>
      <NavBar/>
      {loading ? 
       <div style={{display:'flex',width:'100vw',height:'100vh',justifyContent: 'center',alignItems: 'center'}}>
        <Spinner animation="border" variant="primary"/>
        </div>
      :
      <>
        <div style={{marginTop:'100px'}}/>
        <InfiniteScroll 
        dataLength={peopleListToDisplay.length}
        next={getMorePeople}
        hasMore={hasMore}
        loader={<></>}>
          <Container>
          <Row>
              {
                peopleListToDisplay.map((person:any,index)=>{
                  return(
                    <CustomCol key={index} >
                      <PersonCard 
                      className="personCard"
                      displayDetails={true}
                      id={person?.login.username}
                      imgSrc={person?.picture.large} 
                      name={`${person?.name.first} ${person?.name.last}`} 
                      username={`${person?.login.username}`} 
                      email={person?.email} 
                      phone={person?.phone} 
                      city={person?.location.city} 
                      country={person?.location.country} 
                      />
                    </CustomCol>
                  )
                })
              }
          </Row>
        </Container>
      </InfiniteScroll>

      
    <Offcanvas show={lastVisitedOpen} placement={'end'} onHide={()=>{dispatch(setLastVisitedOpen(false))}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>People Recently Visited</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <ListGroup>
          {peopleClickedList.slice().reverse().map((clickedId,index)=>{
              let person = findPersonByUsername(clickedId,peopleList)
              return(
                <ListGroupItem key={index} style={{border:'none'}}>
                      <PersonCard 
                      className="clickedListCard"
                      displayDetails={false}
                      id={person?.login.username}
                      imgSrc={person?.picture.large} 
                      name={`${person?.name.first} ${person?.name.last}`} 
                      username={`${person?.login.username}`} 
                      email={person?.email} 
                      phone={person?.phone} 
                      city={person?.location.city} 
                      country={person?.location.country} 
                      />
                </ListGroupItem>
              )
          })}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
      </>

    }



    <ScrollToTopButton/>
    </>


  )
}

export default PersonFinder;

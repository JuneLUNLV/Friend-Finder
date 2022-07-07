import {selectPeopleClickedId, selectPeopleList} from './PeopleSlice'
import { useAppSelector,useAppDispatch } from '../app/hooks';
import {useState,useEffect} from 'react'
import { Person } from '../types/Person';
import { Card,Spinner } from 'react-bootstrap';
import findPersonByUsername from '../utils/findPersonByUserName';

import { useRouter } from 'next/router'


const PersonProfile = (props:any) => {
    const [person,setPerson] = useState<Person>();

    const clickedId = useAppSelector(selectPeopleClickedId);
    const peopleList = useAppSelector(selectPeopleList);

    const router = useRouter();

    let nextBirthdayInDays = 0;
    
    useEffect(()=>{
      if(clickedId.length == 0){
        router.push('/')
      }
      if(peopleList)
          setPerson(peopleList[0]);
    },[])

    useEffect(() => {
        const temp_person = findPersonByUsername(clickedId,peopleList);
        setPerson(temp_person);
    }, [clickedId]);


    if(person){
      let myBirthday, today, bday, diff, days;
      let birthday = new Date(person.dob.date);
      myBirthday = [Number(birthday.toLocaleDateString().split('/')[1]),Number(birthday.toLocaleDateString().split('/')[0])]; // 6th of February
      today = new Date();
      bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
      if( today.getTime() > bday.getTime()) {
          bday.setFullYear(bday.getFullYear()+1);
      }
      diff = bday.getTime()-today.getTime();
      nextBirthdayInDays = Math.floor(diff/(1000*60*60*24));
    }

    return (
        person == null
        ? 
        <div style={{display:'flex',width:'100vw',height:'100vh',justifyContent: 'center',alignItems: 'center'}}>
        <Spinner animation="border" variant="primary"/>
        </div> 
        :
      <div className="d-flex justify-content-center align-content-center align-items-center min-vh-100">
      <Card className="displayCard">

          <Card.Title>
                {`${person.name?.title}. ${person.name?.first} ${person.name?.last}`}
                <p style={{"color":"#3498db","fontSize":".87em","fontFamily":"\"varela round\", sans-serif",marginBottom:'0px'}}>{person.login.username}</p>

          </Card.Title>
          <img src={person.picture.large} alt="" width="200"></img>
          <div className="mt-4">
            <p>Gender: {person.gender}</p>
            <p>Birthday: {new Date(person.dob.date).toLocaleDateString()}</p>
            <p>Age: {person.dob.age}</p>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>
            <p>Nationality: {person.nat} </p>
            <p>Address: {`${person.location.street?.number} ${person.location.street?.name}, ${person.location?.city}, ${person.location.state} ${person.location?.postcode}`}</p>
            <p>Timezone: {`${person?.location.timezone?.offset} - ${person?.location.timezone?.description}`}</p>
            <p>Registered Date: {`${new Date(person.registered?.date).toLocaleString()}`}</p>
            <p>Registered {person.registered?.age} years ago</p>
            <p>Next birthday in: {nextBirthdayInDays} days</p>
          </div>
      </Card>
      </div>


  );
}

export default PersonProfile;
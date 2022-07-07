import {  Card, Button } from 'react-bootstrap'
import {HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'
import {useAppDispatch } from '../app/hooks';
import {setPeopleClickedId} from './PeopleSlice'
import { appendPeopleClickedList } from './PeopleSlice';

import { useRouter } from 'next/router'


const PersonCard = (props:any) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return(
        <Card className={props.className} onClick={()=>{dispatch(setPeopleClickedId(props.id));dispatch(appendPeopleClickedList(props.id));router.push(`/profile/${props.id}`)}}>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
        <Card.Img variant="top" src={props.imgSrc} className="rounded-circle" style={{width:'100px'}}/>
        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'flex-start',marginLeft:'20px'}}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Title style={{"color":"#3498db","fontSize":".87em","fontFamily":"\"varela round\", sans-serif"}}>{props.username}</Card.Title>
        </div>


        </div>

        {
          props.displayDetails ? 
          <Card.Body>

            <div style={{"color":"#7f8c8d","fontSize":".87em","fontFamily":"\"varela round\", sans-serif",whiteSpace: "pre-wrap",marginTop:'15px'}}>
              <div style={{display:'flex',alignItems:'center',marginBottom: "0.5em"}}> <HiOutlineMail/> <p className="mb-0 ms-2">{props.email}</p></div>
              <div style={{display:'flex',alignItems:'center',marginBottom: "0.5em"}}> <HiOutlinePhone/> <p className="mb-0 ms-2">{props.phone}</p></div>
              <div style={{display:'flex',alignItems:'center',marginBottom: "0.5em"}}> <HiOutlineLocationMarker/> <p className="mb-0 ms-2">{props.city}, {props.country}</p></div>
            </div>
           </Card.Body>
          :
          <></>
        }

      </Card>
    )
}

export default PersonCard;
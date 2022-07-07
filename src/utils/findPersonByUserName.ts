import { Person } from "../types/Person";

const findPersonByUsername = (clickedId:string,peopleList:Array<Person>) => {
    for (let person of peopleList){
      if(person.login.username == clickedId){
        return(person)
      }
    }
}

export default findPersonByUsername;
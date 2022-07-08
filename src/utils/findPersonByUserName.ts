import { Person } from "../types/Person";

const findPersonByUsername = (clickedId:string,peopleList:Array<Person>) => {
  let returnPerson = peopleList[0];
    for (let person of peopleList){
      if(person.login.username == clickedId){
        returnPerson = person
        return returnPerson;
      }
    }
    return returnPerson;
}

export default findPersonByUsername;
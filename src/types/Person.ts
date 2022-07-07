export interface Person {
    name:{
    first:'',
    last:'',
    title:''
  },
  gender:"",
  location:{
    street:{
      number: 0,
      name: ''
    },
    city: '',
    state: '',
    postcode: 0,
    timezone:{
      offset: '',
      description: ''
    },
    country: ""
  },
  dob:{
    date:'',
    age:0
  },
  email:'',
  id:{},
  login:{
    username: '',

  },
  nat:"",
  phone: "",
  picture: {
    large: '',
  },
  registered:{
    date: '',
    age: 0
  },
}

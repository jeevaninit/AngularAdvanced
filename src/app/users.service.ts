import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  usersdata=[
  {
  id:1,
  username:'Jeevan',
  url:'',
  email:'jeevan@gmail.com',
  address:{
    city:'Hyderabad',
    phone:'8934893498'
  }

  },


  {
    id:2,
    username:'sai',
    email:'sai@gmail.com',
    address:{
      city:'Hyderabad',
      phone:'8934893498'
    }
  
    },
    {
      id:3,
      username:'bhanu',
      email:'bhanu@gmail.com',
      address:{
        city:'Hyderabad',
        phone:'8934893498'
      }
    
      },
      {
        id:4,
        username:'aadhya',
        email:'aadhya@gmail.com',
        address:{
          city:'Hyderabad',
          phone:'8934893498'
        }
      
        }
]
}

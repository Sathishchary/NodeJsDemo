import { v4 as uuidv4 } from 'uuid'; 

const userArray = [];

export const users =  (req, res)=>{
    res.send(userArray);
}

export const getUser = (req, res)=>{
    const { id } = req.params;
    const founduser = userArray.find(item=> item.id === id);
    res.send(founduser);
}

export const addUser = (req, res)=>{
    console.log(req.body);
    const user  = req.body;
    userArray.push({...user, id: uuidv4()});
    res.send(userArray);
}

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    const index  = userArray.findIndex(item=> item.id === id);
    userArray.splice(index, 1);
    if(index === undefined || index === -1){
      res.send("Not found "+ id);
    } else {
      res.send("delete of the "+ id+ "successfully");
    }
  }

  export const updateUser = (req, res)=>{
    console.log(req.id);
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;
    const user = userArray.find(item=> item.id === id);
  
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(user);
    console.log('user udpated with id'+ id);
    
  }
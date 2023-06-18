import React, {useState} from 'react';
import Input from '../../components/inputs';
import Button from '../../components/button';
import Card from '../../components/card';

 const AddVoter = () => {
    const [state, setState] = useState({studentId:"", 
    studentName:"",
     email:"",
      telephone:"", 
      password:""
     });
    const handleClick = () => {
        console.log(state);
    };
  return (
    
        <Card title="Student Information">
        <form 
            onSubmit={() => {
                handleClick()
                }}
                >
     <Input  
         name="studentId"
          id="studentId"
           type="text"
            title="Student ID"
             onChange={(e) => {
        setState((prevState) => {
            return{ ...prevState, studentId: e.target.value };
        });
    }}
    />
    <Input   name="studentName"
     id="studentName"
      type="text" 
      title="Student Name" 
      onChange={(e) => {
        setState((prevState) => {
            return{ ...prevState, studentName: e.target.value };
        });
    }}
    />
    <Input 
      name="email"
       id="email"
        type="email"
         title="Email"
          onChange={(e) => {
        setState((prevState) => {
            return{ ...prevState, email: e.target.value };
        });
    }}
    />
    <Input 
      name="telephone"
       id="telephone"
        type="tel"
         title="Telephone"
    onChange={(e) => {
        setState((prevState) => {
            return{ ...prevState, telephone: e.target.value };
        });
    }}
    />

    <Input  
     name="password"
      id="password" 
      type="password"
       title="Password"
       onChange={(e) => {
        setState((prevState) => {
          return { ...prevState, password: e.target.value };
        });
      }}
    />

    <Button  type="submit" title="Submit" />
       </form>
  
  </Card>
  );
};
export default AddVoter;
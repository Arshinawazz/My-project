import axios from 'axios';
import React, { useState } from 'react';  // Correct import
import { useNavigate }   from 'react-router-dom';
import {Link} from 'react-router-dom'
//1) Imports- axios=>use to make http request (post request to mock api)
//usestate=>react hook that allows to create and manage state(data in component)
function Create() {  // function which define react component ( fun that return html +jsx)

    // 2) State hooks :- Name,Designation,salary is state , stored the values in input fields
    //usestate initializes each state variable to an empty string
    //setname ..will used to update these values when user types in form
    const [Name, setName] = useState('');
    const [Designation, setDesignation] = useState('');
    const [Salary, setSalary] = useState(''); 
     //usenavigate is used  to navigate from one component to another
    const navigate=useNavigate();

    // 3) Form submission handler ,handleSubmit: This function is triggered when the form is submitted
    //e.preventDefault=> stop the page from reloading
    //axios.post=>send post request to URL,request sends the data (name,des..) to server
    //server will expect the value as e_name,,,)
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
         axios.post(' https://670a9c0fac6860a6c2c9fd99.mockapi.io/api/users',{
            e_name:Name,
            e_designation:Designation,
            e_salary:Salary //Whenever we use get or post,it return promise (Resolve=then or return =catch)

         }).then(()=> {
            navigate('/');
         })
         .catch((err) =>{
          console.log(err)
     })
     ;
       // console.log("Form Submitted", { Name, Designation, Salary });
    }

//5) FORM (JSX) => use to write html inside Javascript
     return (
        //6) form fields=>
      <> 
        <div className="row">
          <div className="col-md-4">
          <div className='mb-2 mt-2'>
              <Link to ='/'>
              <button className='btn btn-success'> Read Data </button>
              </Link>
                
            </div>
            <div className="bg-secondary p-4 text-center">
              <h1>My Tasks</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={Name}
                  //value={Name} => display the current value
                  onChange={(e) => setName(e.target.value)}
                  //onChange={(e) => setName(e.target.value)}: This updates the Name state whenever the user types something in the input field.
                  // e.target.value=> gets the current value of the input.
                />
              </div>
              <div className="form-group">
                <label>Enter Designation: </label>
                <input
                  type="text"
                  placeholder="Designation"
                  className="form-control"
                  value={Designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Enter Salary: </label>
                <input
                  type="number"
                  placeholder="Salary"
                  className="form-control"
                  value={Salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>

              <br />
              <div className="d-grid"> 
                <input type="submit" value="Submit" className="btn btn-primary" />
              </div>
            </form>
             
            {Name}
            <br/>
            {Designation}
            <br/>
            {Salary}
        
          </div>
        </div>
      </>
    );
 } //7) submit button , and display the state values

export default Create;


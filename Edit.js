import axios from 'axios';
import React, {useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import { useNavigate }   from 'react-router-dom';


 
function Edit() {
    
const [id,setId]=useState(0);
const [name,setName]=useState('');
const [designation,setDesignation]=useState('');
const [salary,setSalary]=useState('');
const navigate=useNavigate();


useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setDesignation(localStorage.getItem('designation'));
    setSalary(localStorage.getItem('Salary'));
},[])

const handleUpdate=(e)=>{
  e.preventDefault()
  axios.put(`https://670a9c0fac6860a6c2c9fd99.mockapi.io/api/users/${id}`,{
    e_name : name,
    e_designation :designation,
    e_salary : salary
  }).then(()=>{
    navigate('/');
  }).catch((err) =>{
       console.log(err)
  })
  ;

};

  return (
 


    
    <> 
        <div className="row">
          <div className="col-md-4">
          <div className='mb-2 mt-2'>
              <Link to ='/'>
              <button className='btn btn-success'> Read Data </button>
              </Link>
                
            </div>
            <div className="bg-secondary p-4 text-center">
              <h1>Update Data </h1>
            </div>
            <form onSubmit={handleUpdate} >
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Name"
                  className="form-control"
                  //value={Name} => display the current value
                 
                  //onChange={(e) => setName(e.target.value)}: This updates the Name state whenever the user types something in the input field.
                  // e.target.value=> gets the current value of the input.
                />
              </div>
              <div className="form-group">
                <label>Enter Designation: </label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e)=>setDesignation(e.target.value)}
                  placeholder="Designation"
                  className="form-control"
                  
                />
              </div>
              <div className="form-group">
                <label>Enter Salary: </label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e)=>setSalary(e.target.value)}
                  placeholder="Salary"
                  className="form-control"
                  
                 
                />
              </div>
              <br />
              <div className="d-grid"> 
                <input type="submit" value="Update" className="btn btn-primary" />
              </div>
            </form>
            
            
        
          </div>
        </div>
      </>
    
  )
}

export default Edit

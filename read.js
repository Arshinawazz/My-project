import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


function  Read() {

    const [ apiData, setApiData] = useState([])


        function getData(){
            axios.get('https://670a9c0fac6860a6c2c9fd99.mockapi.io/api/users/')
            .then((response)=>{
             setApiData(response.data);
            })
            .catch((err) =>{
                console.log(err)
           })
           ;
            
        }
         function handleDelete(id){
            axios.delete(`https://670a9c0fac6860a6c2c9fd99.mockapi.io/api/users/${id}`)
            .then(()=>{
                getData();
            }).catch((err) =>{
                console.log(err)
           })
           ; 
           
           
                
         }

         function setDataToStorage(id,name,designation,salary){
            localStorage.setItem('id',id);
            localStorage.setItem('name',name);
            localStorage.setItem('designation',designation);
            localStorage.setItem('salary',salary);
         }

        useEffect(()=> {
            getData();
        },[])

  return (
  
    <>
    <div className='row'>
        <div className='col-md-12'>
            
                <div className='mb-2 mt-2'>
                    <Link to ='/create'> 
                        <button className='btn btn-success'> Create New Data </button>
                    </Link>
                
                </div>
            
                
            
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESIGNATION</th>
                        <th>SALARY</th> 
                        <th>EDIT</th>
                        <th>SUBMIT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((item)=>{
                         return(
                            <>
                               <tr>
                                   <td>{item.id}</td>
                                  <td>{item.e_name}</td>
                                 <td>{item.e_designation}</td>
                                 <td>{item.e_salary}</td>
                                 <td>
                                    <Link to='/Edit'>
                                       <button className='btn btn-primary' onClick={()=> setDataToStorage(item.id,item.e_name,item.e_designation,item.e_salary)}> Edit </button>
                                    </Link>
                    
                                 </td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=> {if(window.confirm('Are you Sure want to Delete Data ?')){handleDelete(item.id)}}}> Delete </button>
                                </td>
                              </tr>
                            </>
                         )
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Read

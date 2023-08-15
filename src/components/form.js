import React from 'react'
import './form.css'
import { Link } from 'react-router-dom';

function MyForm() {
  return (
    <div className='Noob'>
      <form className='centered-form' > 
        <div><h2 className='h2'>MAKE NEW ACCOUNT</h2></div>      
        <div><input className="type-1" type="text" name="name" placeholder='First Name'/>    
        <input className="type-1" type="text" name="name" placeholder='Last Name'/>               
        <input className="type-1" type="email" name="email" placeholder='E-mail'/>      
        <input className="type-1" type="password" name="name" placeholder='Password'/> 
        </div>
        <div><br></br></div> 
        <button type="submit">SUBMIT</button>
        <div>
        <div><br></br></div>
         <b><h3 className="h3">ALREADY REGISTERED ?</h3> </b> <br></br><button><Link to ="/Login">LOGIN</Link></button>
        </div>
 
      </form>
    </div>
  )
}

export default MyForm;

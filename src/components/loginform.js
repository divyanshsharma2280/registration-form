import React from 'react'
import './loginform.css'
import { Link, useNavigate } from 'react-router-dom';
import Register from '../pages/Register';
function Loginform() {
  return (
    <div>
      <form className='centered-form' > 
        <div><h2 className='h2'>LOGIN PAGE</h2></div>      
        <div>               
        <input className="type-1" type="email" name="email" placeholder='E-mail'/>      
        <input className="type-1" type="password" name="name" placeholder='Password'/> 
        </div>
        <div><br></br></div> 
        <button type="submit">LOGIN</button>
        <div> <b><h4 className='h2'>NOT REGISTERED ? </h4></b><br></br><button><Link to='/'>REGISTER</Link></button></div>
 
      </form>
    </div>
  )
}

export default Loginform;

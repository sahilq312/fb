import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem('token')
    const Navigate = useNavigate()
    
    function logout() {
        localStorage.clear();
        Navigate('/login')
    }
    
  return (
    <div>
        {
            auth ?
        <ul>    
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/friend'>Friends</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <button onClick={logout}>Logout</button>
        </ul>
        :
        <ul>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        </ul>
        }
    </div>
  )
}

export default Navbar
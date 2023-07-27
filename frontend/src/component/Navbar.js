import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem('token')
    function logout() {
        localStorage.removeItem('token')
    }
    
  return (
    <div>
        {
            auth ?
            <>
            <NavLink to='/'>Home</NavLink>
        <NavLink to='/friend'>Friends</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <button onClick={logout}>Logout</button>
        </>
        :
        <>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        </>
        }
    </div>
  )
}

export default Navbar
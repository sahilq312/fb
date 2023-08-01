import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {LiaUserFriendsSolid} from 'react-icons/lia'
import {FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
    const auth = localStorage.getItem('token')
    const Navigate = useNavigate()
    
    function logout() {
        localStorage.clear();
        Navigate('/login')
    }
    
  return (
    <div className='bg-red-400 w-full p-4'>
        {
            auth ?
        <ul className='flex justify-center space-x-10'>    
        <NavLink to='/'>{({isActive})=> isActive ? <AiFillHome/>: <AiFillHome/>}</NavLink>
        <NavLink to='/friend'>{({isActive})=> isActive ? <FaUserFriends/>: <LiaUserFriendsSolid/>}</NavLink>
        <NavLink to='/profile'>{({isActive})=> isActive ? <CgProfile/>: <CgProfile/>}</NavLink>
        <button onClick={logout}>Logout</button>
        </ul>
        :
        <ul className='flex justify-center space-x-10'>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/register'>register</NavLink>
        </ul>
        }
    </div>
  )
}

export default Navbar
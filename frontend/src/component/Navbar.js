import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {LiaUserFriendsSolid} from 'react-icons/lia'
import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'

const Navbar = () => {
    const auth = localStorage.getItem('token')
    const Navigate = useNavigate()
    
    function logout() {
        localStorage.clear();
        Navigate('/login')
    }
    
  return (
    <div className='text-center h-20 w-full p-6 border border-slate-600'>
        {
            auth ?
        <ul className='flex justify-center space-x-10 md:space-x-24 text-3xl'>    
        <NavLink to='/'>{({isActive})=> isActive ? <AiFillHome/>: <AiOutlineHome/>}</NavLink>
        <NavLink to='/create'>{({isActive})=> isActive ? <FaUserFriends/>: <LiaUserFriendsSolid/>}</NavLink>
        <NavLink to='/profile'>{({isActive})=> isActive ? <CgProfile/>: <CgProfile/>}</NavLink>
        <button onClick={logout}><HiOutlineLogout/></button>
        </ul>
        :
        <ul classNameNam='flex justify-center space-x-10'>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/register'>register</NavLink>
        </ul>
        }
    </div>
  )
}

export default Navbar
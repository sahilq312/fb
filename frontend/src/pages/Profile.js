import React, {useEffect,useState} from 'react'

const Profile = () => {
  
  const [userData, setUserData] = useState("")
  const token = localStorage.getItem('token')
  useEffect(()=>{
    fetch('http://localhost:5000/user/profile',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${token}`
      }
    },[token])
    .then(response=> response.json())
    .then(data=>{
      setUserData(data)
  })})
  return (
    <div key={userData.id}>
      <h1>{userData.email}</h1>
    </div>
  )
}

export default Profile
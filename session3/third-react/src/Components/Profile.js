import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
    </div>
  )
}

export default Profile
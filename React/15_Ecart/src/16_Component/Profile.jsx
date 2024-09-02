import React from 'react'
import { useEffect } from 'react'

const Profile = () => {
  useEffect(() => {
      let count = 0;
      let id = setInterval(() => {
        count++
        console.log(count)
      }, 1000)

      
      return () => {
        clearInterval(id)
      }
    }, [])
  return (
    <div>Profile</div>
  )
}

export default Profile
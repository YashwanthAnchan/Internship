import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate=useNavigate()

  const handleButton=()=>{
    navigate("/Blogs")
  }

  const handleButton1=()=>{
    navigate("/Contact")
  }
  return (
    <div>Home
      <button onClick={handleButton}>Go to Blogs</button><br></br>
      <button onClick={handleButton1}>Go to Contacts</button>
    </div>

  )
}

export default Home

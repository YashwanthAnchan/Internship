import React, { useState } from 'react'

function Blogs() {
  const [color,setColor]=useState("Hello Blue")
  const handleButton=()=>{
    setColor("Hello, Pink")
  }
  return (
    <div>Blogs,<br></br>{color}
    <button onClick={handleButton}>Click</button>
    </div>
  )
}

export default Blogs
import React, { useState } from 'react'


function File1() {
    const [count,setCount]=useState(0); 
    // let input1,input2,input3;
    
    const handleButton=()=>{
        setCount(count+1)
    }
    const handleButton1=()=>{
        setCount(count-1)
    }
    const handleButton2=()=>{
        setCount(count+2)
    }
    const handleButton3=()=>{
        setCount(count-2)
    }
    // const handleButton4=()=>{
    //     input3(input1+input2)
    // }
  return (
    <div>{count}<br></br>
    {/* <input type='number' name='input1'></input>
    <input type='number' name='input2'></input> */}
    
    {/* <button onClick={handleButton4}>ADD</button><br></br> */}
    <button className='bg-red-700 p-2 border-4 border-yellow-500 font-extrabold ' onClick={handleButton}>INCREASE</button><br></br>
    <button onClick={handleButton1}>DECREASE</button><br></br>
    <button onClick={handleButton2}>DOUBLE INCREASE</button><br></br>
    <button onClick={handleButton3}>DOUBLE DECREASE</button></div>
)
  
}

export default File1
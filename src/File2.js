import React from 'react'
import Pic from "../src/assets/CKK_8511.jpg"

function File2() {
  return (
    <div>
    <div className='md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full '>
        <div className='bg-red-600 p-2'>1</div>
        <div className='bg-green-600 p-2'>2</div>
        <div className='bg-blue-600 p-2'>3</div>
        <div className='bg-orange-600 p-2'>4</div>
    </div>

    <div className='hidden md:block flex flex-col md:flex-row w-full'>
        <div className='bg-stone-400 w-full text-center'><p>1</p>
        <span>moodbidri</span>
        <img src={Pic} alt="bike"/></div>
        <div className='bg-yellow-500 w-full'>2</div>
        
    </div>
    </div>
  )
}

export default File2
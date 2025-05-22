import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]'>
        <span className="loader"></span>
    </div>
  )
}

export default Spinner
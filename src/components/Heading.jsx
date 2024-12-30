import React from 'react'
import style from './Heading.module.css'

const Heading = () => {
  return (
    <div className={`${style.headDiv}`}>
      <h1 className={`${style.heading}`}>To-Do List</h1>
    </div>
  )
}

export default Heading

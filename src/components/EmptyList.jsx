import React from 'react'
import style from './EmptyList.module.css'

const EmptyList = () => {
  return (
    <div>
      <center className={`${style.emptyheaddiv}`}>
        <h3>Your List is Empty !!</h3>
      </center>
    </div>
  )
}

export default EmptyList

import React from 'react'
import style from './ToDoItems.module.css'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const ToDoItems = ({todoitems, removetask}) => {

  return (
    <div>
      <ul className={`list-group ${style.itemslist}`}>
        {todoitems.map((item) => (
          <li key={item.id} className={`list-group-item ${style.list}`}>
            <p>{item.name}</p> 
            <div className={`${style.datebutton}`} >
              <p>{item.date}</p>
              <button type="button" onClick={() => removetask(item.id)} className={`btn btn-danger ${style.removebutton}`}>
                <MdOutlineRemoveCircleOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoItems

import React, { useRef } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import style from './AddToDoItems.module.css'


const AddToDoItems = ({addtask}) => {

  const taskfield = useRef(null);
  const datefield = useRef(null);

  const updatefields = () => {
    const currtaskfield = taskfield.current.value;
    const currdatefield = datefield.current.value;

    addtask(currtaskfield, currdatefield);

    taskfield.current.value = '';
    datefield.current.value = '';

  }

  const handleonKeyDown = (e) => {
    if (e.key === 'Enter'){
      updatefields();
    }
  }
  
  return (
    <div className={style.inputsDiv}>
      <input type="text" ref={taskfield} onKeyDown={handleonKeyDown} className={`${style.inputTags} ${style.inputField}`} placeholder='Enter Task here'/>
      <input type="date" ref={datefield} className={`${style.inputDate} ${style.inputTags}`}/>
      <button onClick={updatefields} type="button" className={`btn btn-success ${style.inputButton}`}><IoMdAddCircleOutline /></button>
    </div>
  )
}

export default AddToDoItems

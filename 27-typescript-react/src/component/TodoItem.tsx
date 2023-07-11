import React from 'react'
import classes from '../component/TodoItem.module.css'
const TodoItem: React.FC<{ text: string;onRemovetodo:(event:React.MouseEvent)=>void}> = (props) => {
  return (
      <li className={classes.item} onClick={props.onRemovetodo}>{props.text}</li>
  )
}

export default TodoItem
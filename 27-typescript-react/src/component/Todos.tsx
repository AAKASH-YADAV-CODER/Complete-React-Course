import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import classes from '../component/Todos.module.css';
import { TodoContext } from '../context/todo-context';

const Todos: React.FC= () => {
    const todocntx = useContext(TodoContext);
  return (
      <div className={classes.todos}>
          {todocntx.items.map((ele) => <TodoItem text={ele.text} key={ele.id} onRemovetodo={todocntx.onRemovetodo.bind(null,ele.id)} />)}
      </div>
  )
}

export default Todos
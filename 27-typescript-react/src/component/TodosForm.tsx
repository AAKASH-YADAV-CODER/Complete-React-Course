import React, { useRef ,useContext} from 'react'
import classes from '../component/TodosForm.module.css'
import { TodoContext } from '../context/todo-context';
const TodosForm: React.FC= () => {
    const todocntx = useContext(TodoContext);
    const todotxtinputref = useRef<HTMLInputElement>(null)
    const submithandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredtodotxt = todotxtinputref.current!.value;
        if (enteredtodotxt.trim().length === 0) {
            return ;
        }
        todocntx.onAddtodo(enteredtodotxt);
        todotxtinputref.current!.value = "";
        // todotxtinputref.current?.onreset;

    };
    // const clearHandler = (e:React.FormEvent) => {
    //     e.preventDefault();
    //     const input = document.getElementById('text');
    //     input?.onreset;
    // }
  return (
      <form onSubmit={submithandler} className={classes.form}>
          <label htmlFor='text'>Todo text</label>
          <input type={"text"} id="text" ref={todotxtinputref}/>
          <button >Add Todo</button>
    </form>
  )
}

export default TodosForm
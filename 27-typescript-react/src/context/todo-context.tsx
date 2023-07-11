import React, { ReactNode, useState} from 'react';
import Todo from '../model/todo'
type todoobj = {
    items: Todo[];
    onAddtodo: (text:string) => void;
    onRemovetodo: (id:string) => void;
}
export const TodoContext = React.createContext<todoobj>({
    items: [],
    onAddtodo: () => {},
    onRemovetodo:(id:string)=>{},
});
type userProvideprops = {
    children:ReactNode
}
const TodosProvider: React.FC<userProvideprops> = (props) => {
    const [todotxt, settodotxt] = useState<Todo[]>([]);
    const addtodoHandler = (todottxt: string) => {
        const newtodotxt = new Todo(todottxt);
        settodotxt((prevState) => { return prevState.concat(newtodotxt) });
    }
    const removetodoHandler = (todoId: string) => {
        settodotxt((prevstate) => {
            return prevstate.filter(todo => todo.id !== todoId);
        })
    }
    const contxtvalue: todoobj = {
        items: todotxt,
        onAddtodo: addtodoHandler,
        onRemovetodo: removetodoHandler,
    }
    return (<TodoContext.Provider value={contxtvalue}>{props.children}</TodoContext.Provider>)
};
export default TodosProvider;
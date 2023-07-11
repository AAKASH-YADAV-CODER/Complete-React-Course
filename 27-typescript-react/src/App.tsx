import Todos from "./component/Todos";
import TodosForm from "./component/TodosForm";
import TodosProvider from "./context/todo-context";
function App() {
    return (
    <TodosProvider>
      <TodosForm/>
      <Todos/>
    </TodosProvider>
  );
}

export default App;

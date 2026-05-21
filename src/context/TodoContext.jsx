import { createContext, useState} from "react";


export default function TodoProvider({children}) {

  const [todos, setTodos] = useState([]);

  //addTodo
  const addTodo = (text) => {

  }
  
  //toggleTodo
  
  //removeTodo

  const ProviderObj = { todos, addTodo };
  return(
    <TodoContext.Provider value={ProviderObj}>{children}</TodoContext.Provider>
  );
}

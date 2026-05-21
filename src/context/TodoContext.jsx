import { createContext, useState} from "react";

export const TodoContext = createContext({})

export default function TodoProvider({children}) {

  const [todos, setTodos] = useState([]);

  //addTodo
  
  //toggleTodo
  
  //removeTodo

  const ProviderObj = { todos };
  return(
    <TodoContext.Provider value={ProviderObj}>{children}</TodoContext.Provider>
  );
}

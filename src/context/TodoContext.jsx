import { createContext, useState} from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

  //addTodo
  const addTodo = (text) => {
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: Date.now(),
        task: text,
        done: false,
      }]
    });
  }

  //toggleTodo
  
  //removeTodo

  const ProviderObj = { todos, addTodo };
  return(
    <TodoContext.Provider value={ProviderObj}>{children}</TodoContext.Provider>
  );
}

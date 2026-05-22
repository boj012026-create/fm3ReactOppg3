import { createContext, useState} from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

  //addTodo
  const addTodo = (text) => {
    const newUser = {
        id: Date.now(),
        task: text,
        done: false
    }
    setTodos(prevTodos => {
      return [...prevTodos, newUser]
    });
    console.log(todos);
  }

  //toggleTodo
  
  //removeTodo

  const ProviderObj = { todos, addTodo };
  return(
    <TodoContext.Provider value={ProviderObj}>{children}</TodoContext.Provider>
  );
}

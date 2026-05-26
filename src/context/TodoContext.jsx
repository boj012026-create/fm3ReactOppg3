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
  }

  //toggleTodo
  const toggleTodo = (id) => {
    setTodos( todos.map(task => {
        if (task.id == id) {
          task.done = !task.done;
        }
      return task;
      })
    )
  } 

  //removeTodo
    const removeTodo = (id) => {
    setTodos( todos.filter(task => task.id != id) );
  }

  const ProviderObj = { todos, addTodo, toggleTodo, removeTodo };
  return(
    <TodoContext value={ProviderObj}>{children}</TodoContext>
  );
}

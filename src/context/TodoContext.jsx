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
  const toggleTodo = (id) => {
    setTodos( todos.map(task => {
          console.log(`toggleTodo ${task.id} ${id} ${task.id == id}`);
        if (task.id == id) {
          task.done = !task.done;
        }
      return task;
      })
    )
  } 

  //removeTodo
    const removeTodo = (id) => {
    console.log(id)
    setTodos( todos.filter(task => task.id != id) );
  }

  const ProviderObj = { todos, addTodo, toggleTodo, removeTodo };
  return(
    <TodoContext value={ProviderObj}>{children}</TodoContext>
  );
}

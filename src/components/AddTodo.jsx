import TodoContext from "../context/TodoContext";
import { useContext } from "react";

const { addTodo } = useContext(TodoContext);
export default function AddTodo() {
  return(
    <>
      <form onSubmit={addTodo}>
        <label For="todoInput">Add more tasks</label>
       <input 
          id="todoInput"
          name="todoInput"
          type="text" />
      </form>
    </>
  );
}

import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    addTodo(text);
    setText("");

  }
  return(
    <>
      <h3>Add Tasks</h3>
      <form onSubmit={handleAddTodo}>
       <input 
          value={text}
          type="text"
          required
          onChange={ (e) => setText(e.target.value)}  
        />
      <button>add</button>
      </form>
    </>
  );
}

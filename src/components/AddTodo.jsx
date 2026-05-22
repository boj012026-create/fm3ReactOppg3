import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    addTodo(text);
  }
  return(
    <>
      <h3>AddTodo</h3>
      <form onSubmit={handleAddTodo}>
       <input 
          value={text}
          type="text"
          onChange={ (e) => setText(e.target.value)}  
        />
      <button>add</button>
      </form>
    </>
  );
}

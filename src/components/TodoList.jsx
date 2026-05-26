import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';


export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  const parentId = event => {
    return event.target.parentElement.id
  }

  const handleToggle = e => {
    console.log("handleToggle entered")
    toggleTodo(parentId(e));
  }

  const handleRemove = e => {
    removeTodo(parentId(e));
  }

  return(
    <ul>
      {todos.map(task => (
        <li
          id={task.id}
          key={task.id}
        >
          <input
            id={`${task.id}checkbox`}
            name={`${task.id}checkbox`}
            key={`${task.id}checkbox`}
            type="checkbox"
            onChange={handleToggle}
          />
          <label
            key={`${task.id}text`}
            htmlFor={`${task.id}checkbox`}
          >
            {task.done ? task.id : task.task}
            <button
              key={`${task.id}delBtn`}
              onClick={handleRemove}
            >
              X
            </button>
          </label>
        </li>
      ))}
    </ul>
  );
}

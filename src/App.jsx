import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ThemeSwitcher from "./components/ThemeSwitcher";
import './App.css'

function App() {
  return (
    <>
      <ThemeSwitcher/>
      <AddTodo/>
      <TodoList />
    </>
  )
}

export default App

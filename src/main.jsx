import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './context/TodoContext';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
)

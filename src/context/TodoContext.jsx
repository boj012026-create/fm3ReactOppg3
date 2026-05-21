import { createContext, useState} from "react";

export const TodoContext = createContext({})

export default function TodoProvider({children}) {
  const [todo, setTodo] = useState([]);

  const ProviderObj = { todo };
  return(
    <TodoContext.Provider value={ProviderObj}>{children}</TodoContext.Provider>
  );
}

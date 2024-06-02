import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

interface TodoItem {
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTodo = () => {
    if (title && description) {
      setTodos([...todos, { title, description, completed: false }]);
      setTitle("");
      setDescription("");
    }
  };

  const completeTodo = (index: number, value: boolean) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = value;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add TODO</button>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            setCompleted={(value: boolean) => completeTodo(index, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

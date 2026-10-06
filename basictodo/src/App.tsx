import { useState } from "react";

type TodoType = {
  id: number;
  title: string;
};

type TodoProps = {
  todo: TodoType;
  deleteOne: (id: number) => void;
};

function Todo({ todo, deleteOne }: TodoProps) {
  return (
    <div>
      <span>{todo.title}</span>

      <button onClick={() => deleteOne(todo.id)}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim() === "") return;

    const newTodo: TodoType = {
      id: Date.now(),
      title: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your todo"
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteOne={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
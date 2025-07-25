import { useState } from "react";
import "./index.css";

const ToDoList = () => {
  const [todos, setTodos] = useState(["밥먹기", "샤워하기", "운동하기"]);
  const [newTodo, setNewtodo] = useState("");

  const handleInputChange = (e) => {
    setNewtodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
    setTodos([...todos, newTodo]);
    setNewtodo("");
  };

  const deleteTodo = (index) => {
    const updateTodos = todos.filter((_, i) => i !== index);
    setTodos(updateTodos);
  };

  const moveTodoUp = (index) => {
    const updateTodos = [...todos];
    if (index > 0) {
      [updateTodos[index - 1], updateTodos[index]] = [
        updateTodos[index],
        updateTodos[index - 1],
      ];
      setTodos(updateTodos);
    }
  };

  const moveTodoDown = (index) => {
    const updateTodos = [...todos];
    if (index < todos.length - 1) {
      [updateTodos[index + 1], updateTodos[index]] = [
        updateTodos[index],
        updateTodos[index + 1],
      ];
      setTodos(updateTodos);
    }
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="내용을 작성하세요"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="text">{todo}</span>
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTodoUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTodoDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;

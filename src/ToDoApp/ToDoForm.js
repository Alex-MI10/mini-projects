import { React, useState } from "react";

export default function ToDoForm({ addToDo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addToDo(value);

    setValue("");
  }

  return (
    <form className="todo-wrapper__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-wrapper__input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-wrapper__btn" disabled={!value}>
        Add Task
      </button>
    </form>
  );
}

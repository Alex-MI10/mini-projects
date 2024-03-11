import { React, useState } from "react";

export default function EditToDoForm({ editToDo, task }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    editToDo(value, task.id);

    setValue("");
  }

  return (
    <form className="todo-wrapper--form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-wrapper--input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-wrapper--btn" disabled={!value}>
        Update Task
      </button>
    </form>
  );
}

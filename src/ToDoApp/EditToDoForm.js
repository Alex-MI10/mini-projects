import { React, useState } from "react";

export default function EditToDoForm({ editToDo, task }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    editToDo(value, task.id);

    setValue("");
  }

  return (
    <form className="todo-wrapper__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-wrapper__input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-wrapper__btn" disabled={!value}>
        Update Task
      </button>
    </form>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDo({ task, toggleComplete, deleteToDo, editToDo }) {
  return (
    <div className="todo-wrapper--todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${
          task.completed
            ? "todo-wrapper--completed"
            : "todo-wrapper--incompleted"
        }`}
      >
        {task.task}
      </p>
      <div class="flex">
        <FontAwesomeIcon
          className="todo-wrapper--edit-icon"
          icon={faPenToSquare}
          onClick={() => editToDo(task.id)}
        />
        <FontAwesomeIcon
          className="todo-wrapper--delete-icon ml-10"
          icon={faTrash}
          onClick={() => deleteToDo(task.id)}
        />
      </div>
    </div>
  );
}

import { React, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import EditToDoForm from "./EditToDoForm";

uuidv4();

export default function ToDoWrapper() {
  const [toDos, setToDos] = useState([]);

  function AddToDo(todo) {
    setToDos([
      ...toDos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  function toggleComplete(id) {
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function editToDo(id) {
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  }

  function deleteToDo(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  function editTask(task, id) {
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  }

  return (
    <div className="todo-wrapper">
      <h1>Let's do some tasks!</h1>
      <ToDoForm addToDo={AddToDo} />
      {toDos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm key={todo.id} editToDo={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            editToDo={editToDo}
            deleteToDo={deleteToDo}
          />
        )
      )}
    </div>
  );
}

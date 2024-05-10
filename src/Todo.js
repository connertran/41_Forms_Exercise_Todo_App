import { useState } from "react";
import "./Todo.css";

const Todo = ({ id, text, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    editTask(id, newText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <label htmlFor={`edit-task-${id}`}>Edit Task: </label>
          <input
            type="text"
            id={`edit-task-${id}`}
            name={`edit-task-${id}`}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p className="Todo-task">{text}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTask}>X</button>
        </>
      )}
    </div>
  );
};

export default Todo;

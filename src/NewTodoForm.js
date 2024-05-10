import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTask }) => {
  const initialState = {
    task: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData.task);
    setFormData(initialState);
  };

  const taskId = uuid();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={taskId}>Task: </label>
        <input
          id={taskId}
          type="text"
          name="task"
          placeholder=" Enter a task to do"
          value={formData.task}
          onChange={handleChange}
        />

        <button type="submit">Add Task!</button>
      </form>
    </>
  );
};

export default NewTodoForm;

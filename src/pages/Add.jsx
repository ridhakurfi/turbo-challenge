import { useState } from "react";
import '../styles/add.css'

function Add() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
    completed: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

  }

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h1>Create Todo</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Task description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <label className="checkbox-area">
            <input
              type="checkbox"
              name="completed"
              checked={form.completed}
              onChange={handleChange}
            />
            Completed
          </label>

          <button type="submit">ADD TASK</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
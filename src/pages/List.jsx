import { useEffect, useState } from "react";
import { fetchTasks } from "../api/task"
import { Link, useNavigate } from "react-router-dom";
import '../styles/list.css'

function List() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchTasks();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  function handleLogout() {
    localStorage.removeItem("access_token");
    navigate("/");
  }

  return (
    <div className="table-page">
      <div className="table-container">
        <h1>TODO LIST</h1>
<Link to="/add" className="add-btn">
            + Add Task
          </Link>
          <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Completed</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.dueDate}</td>
                <td>
                  <span
                    className={`priority ${todo.priority.toLowerCase()}`}
                  >
                    {todo.priority}
                  </span>
                </td>
                <td>
                  {todo.completed ? "✅ Done" : "❌ Not Yet"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
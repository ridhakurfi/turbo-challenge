import '../styles/list.css'

function List() {
  const todos = [
    {
      id: 1,
      title: "Gym workout",
      description: "Complete cardio session",
      dueDate: "2026-05-25",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Study React",
      description: "Learn react-router-dom",
      dueDate: "2026-05-26",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      title: "Buy groceries",
      description: "Milk, eggs, vegetables",
      dueDate: "2026-05-27",
      priority: "Low",
      completed: false,
    },
  ];

  return (
    <div className="table-page">
      <div className="table-container">
        <h1>TODO LIST</h1>

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
export async function fetchTasks() {
  const token = localStorage.getItem("access_token");
  const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Not Found");
  }
  return data;
}

export async function createTasks(payload) {
  const token = localStorage.getItem("access_token");
  const res = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error("Failed to create");
  }
  return res.json();
}

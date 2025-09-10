const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Please enter a task");
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <div class="task-left">
      <input type="checkbox" class="taskCheckbox" />
      <span>${text}</span>
    </div>
    <div class="actions">
      <button class="edit">✏️</button>
      <button class="delete">🗑️</button>
    </div>
  `;
  // edit & delete handlers
  li.querySelector(".edit").addEventListener("click", () => {
    const span = li.querySelector("span");
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) span.textContent = newText.trim();
  });
  li.querySelector(".delete").addEventListener("click", () => li.remove());
  taskList.appendChild(li);
  taskInput.value = "";
}

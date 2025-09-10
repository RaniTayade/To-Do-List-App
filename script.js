const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

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

 
  const checkbox = li.querySelector(".taskCheckbox");
  const span = li.querySelector("span");

  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed", checkbox.checked);
    updateProgress();
  });

 
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    updateProgress();
  });

  li.querySelector(".edit").addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) span.textContent = newText.trim();
  });

  taskList.appendChild(li);
  taskInput.value = "";

  updateProgress();
}

function updateProgress() {
  const boxes = document.querySelectorAll(".taskCheckbox");
  const total = boxes.length;
  const checked = [...boxes].filter(b => b.checked).length;

  console.log(`${checked}/${total}`);

  if (total && checked === total) {
    console.log("🎉 All tasks completed!");
    
  }
}

// Select elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskList = document.getElementById("task-list");

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateValue = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Task info container
  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  const taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.textContent = taskText;

  const taskTime = document.createElement("small");
  taskTime.classList.add("task-date");

  // Only show date if selected
  if (dateValue) {
    const dateObj = new Date(dateValue);
    taskTime.textContent = dateObj.toLocaleString();
    taskInfo.appendChild(taskTime);
  }

  taskInfo.appendChild(taskName);

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskName.textContent);
    if (newTask) taskName.textContent = newTask;

    const newDate = prompt("Edit date (YYYY-MM-DD HH:MM):", dateValue);
    if (newDate) {
      const newDateObj = new Date(newDate);
      taskTime.textContent = newDateObj.toLocaleString();
      if (!taskInfo.contains(taskTime)) taskInfo.appendChild(taskTime);
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.addEventListener("click", () => li.remove());

  // Append elements
  li.appendChild(taskInfo);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskDate.value = "";
}

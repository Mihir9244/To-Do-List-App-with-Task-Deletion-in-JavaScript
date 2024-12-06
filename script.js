// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }
  
    const taskList = document.getElementById('task-list');
  
    // Create the new task item
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
  
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  
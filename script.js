document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // Add task
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button>Delete</button>
    `;

    // Mark task as complete
    taskItem.querySelector('span').addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    // Delete task
    taskItem.querySelector('button').addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  });
});

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="text" value="${taskText}" readonly>
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);

    const editButton = li.querySelector('.editButton');
    editButton.addEventListener('click', () => {
      const input = li.querySelector('input');
      input.readOnly = false;
      editButton.textContent = 'Save';
      editButton.addEventListener('click', () => {
        input.readOnly = true;
        editButton.textContent = 'Edit';
      });
    });

    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    taskInput.value = '';
  }
});
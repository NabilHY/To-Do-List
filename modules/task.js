const tasksSection = document.querySelector('.task-section');
const taskDescription = document.getElementById('task-value');

let tasks = [];

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = Date.now();
  }
}

const updateTasksArray = () => {
  if (tasks.length !== 0) {
    tasks = [];
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
};

// 2. a function that add task to array
const addTask = (e) => {
  e.preventDefault();
  if (taskDescription.value === '') {
    const message = document.createElement('div');
    message.classList.add('alert-message');
    const p = document.createElement('p');
    p.innerText = 'Please Add a task to the list';
    message.appendChild(p);
    document.body.appendChild(message);
    setTimeout(() => {
      const element = document.querySelector('.alert-message');
      element.classList.add('none');
    }, 3000);
  } else {
    const newTask = new Task(taskDescription.value);
    tasks.push(newTask);
    tasksSection.innerHTML += `
          <div class="task-row" >
            <input data-id="${newTask.id}" type="checkbox" class="status">
              <input type='text' readonly='readonly' value='${newTask.description}'>
                <div class="buttons">
                  <button>
                    <i class="edit-btn fa-regular fa-pen-to-square" data-id="${newTask.id}"></i>
                  </button>
                  <button>
                    <i class="remove-btn fa-solid fa-delete-left" data-id="${newTask.id}"></i>
                  </button>
                </div>
              </div>
              `;
    taskDescription.value = '';
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const removeFunction = (el) => {
  el.parentElement.parentElement.parentElement.remove();
};

const updateList = (taskIndex) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  list.filter((task) => task.id === taskIndex);
  localStorage.setItem('tasks', JSON.stringify(list));
};

export {
  addTask, tasksSection, removeFunction, updateList, updateTasksArray,
};
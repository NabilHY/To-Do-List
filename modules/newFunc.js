const tasksSection = document.querySelector('.task-section');
const taskDesc = document.getElementById('task-value');

let tasks = [];

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = tasks.length + 1;
  }
}

// 1. create a funtion that populates tasks from ls
const loadLS = () => {
  if (localStorage.length > 0) {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = loadedTasks;
    loadedTasks.forEach((task) => {
      tasksSection.innerHTML += `
        <div class="task-row">
      <input data-id="${task.id}" type="checkbox" class="status">
      <input type='text' readonly='readonly' value='${task.description}'>
      <div class="buttons">
          <button>
              <i class="edit-btn fa-regular fa-pen-to-square" data-id="${task.id}"></i>
          </button>
          <button>
              <i class="remove-btn fa-solid fa-delete-left" data-id="${task.id}"></i>
          </button>
      </div>
    </div> 
      `;
    });
  }
};

// 2. a function that add task to array
const addTask = (e) => {
  e.preventDefault();
  if (taskDesc.value === '') {
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
    const newTask = new Task(taskDesc.value);
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
    taskDesc.value = '';
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { loadLS, addTask, tasksSection };
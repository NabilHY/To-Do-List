const tasksSection = document.querySelector('.task-section');

const loadLocalStorage = () => {
  if (localStorage.length > 0) {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    loadedTasks.forEach((task) => {
      if (task.completed === true) {
        tasksSection.innerHTML += `
        <div class="task-row gap-2 completedTask">
          <input data-id=${task.id} type="checkbox" class="status" checked>
          <input type="text" readonly="readonly" value=${task.description} class="completed">
          <div class="buttons none">
              <button>
                  <i class="edit-btn fa-regular fa-pen-to-square" data-id=${task.id}></i>
              </button>
              <button>
                  <i class="remove-btn fa-solid fa-delete-left" data-id=${task.id}></i>
              </button>
          </div>
        </div>
          `;
      } else {
        tasksSection.innerHTML += `
          <div class="task-row gap-2">
        <input data-id="${task.id}" type="checkbox" class="status">
        <input type='text' readonly='readonly' value='${task.description}'>
        <div class="buttons">
            <button>
            <span data-tooltip="Edit Task" data-flow="left">
                <i class="edit-btn fa-regular fa-pen-to-square" data-id="${task.id}"></i>
            </span>
            </button>
            <button>
            <span data-tooltip="Remove Task" data-flow="right">
                  <i class="remove-btn fa-solid fa-delete-left" data-id="${task.id}"></i>
            </span>
            </button>
        </div>
      </div> 
        `;
      }
    });
  }
};

export default loadLocalStorage;
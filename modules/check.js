const check = (boxEle) => {
  // change the ui to mark the task as complete
  const buttons = boxEle.parentNode.lastElementChild;
  const task = (boxEle.nextElementSibling);
  buttons.classList.add('none');
  task.classList.add('completed');
};

const unchecked = (boxEle) => {
  const buttons = boxEle.parentNode.lastElementChild;
  const task = (boxEle.nextElementSibling);
  buttons.classList.remove('none');
  task.classList.remove('completed');
};

const editValue = (index) => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  arr.forEach((task) => {
    if (task.id === index) {
      task.completed = true;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const restoreValue = (index) => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  arr.forEach((task) => {
    if (task.id === index) {
      task.completed = false;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
};

export {
  check, unchecked, editValue, restoreValue,
};
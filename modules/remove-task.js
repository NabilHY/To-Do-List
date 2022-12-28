const removeFunction = (el) => {
  el.parentElement.parentElement.parentElement.remove();
};

const updateList = (id) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  list.forEach((task, index) => {
    if (task.id === id) {
      list.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(list));
};

export { removeFunction, updateList };
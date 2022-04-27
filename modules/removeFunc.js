/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
const removeFunc = (el) => {
  el.parentElement.parentElement.parentElement.remove();
};

const updateList = (ind) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  list.forEach((task, index) => {
    if (task.id == ind) {
      list.splice(index, 1);
    }
  });
  // Update indexes upon every task deletion
  for (let i = 0; i < list.length; i++) {
    list[i].id = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(list));
};

export { removeFunc, updateList };
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import './style.css';
import { loadLS, addTask, tasksSection } from '../newFunc.js';

const addBtn = document.getElementById('add-btn');

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

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeFunc(e.target);
    updateList(e.target.getAttribute('data-id'));
  }
});
addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadLS);
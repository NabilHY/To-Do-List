/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import './style.css';
import { loadLS, addTask, tasksSection } from '../newFunc.js';
import { removeFunc, updateList } from '../removeFunc.js';

const addBtn = document.getElementById('add-btn');

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeFunc(e.target);
    updateList(e.target.getAttribute('data-id'));
  }
});

const editFunc = (e) => {
  const element = (e.target.parentElement.parentElement.parentElement.children[1]);
  element.setAttribute('value', '');
  element.removeAttribute('readonly');
  element.focus();
  e.target.setAttribute('class', 'fa-solid fa-check check');
  element.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      element.setAttribute('readonly', 'readonly');
      e.target.setAttribute('class', 'edit-btn fa-regular fa-pen-to-square');
      const index = e.target.getAttribute('data-id');
      const arr = JSON.parse(localStorage.getItem('tasks'));
      arr.forEach((task) => {
        if (task.id == index) {
          task.description = element.value;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(arr));
    }
  });
};

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    editFunc(e);
  }
});

addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadLS);
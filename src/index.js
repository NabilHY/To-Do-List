import 'bootstrap';
import './style.css';
import { addTask, tasksSection, updateTasksArray } from './modules/task.js';
import loadLocalStorage from './modules/local-storage.js';
import { removeFunction, updateList } from './modules/remove-task.js';
import editFunc from './modules/edit-task.js';
import {
  check, unchecked, editValue, restoreValue,
} from './modules/check.js';
import clearCompletedTasks from './modules/clear.js';

const addBtn = document.getElementById('add-btn');
const clearBtn = document.querySelector('.clear');
const reset = document.querySelector('.reset');
const input = document.getElementById('task-value');

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeFunction(e.target);
    updateList(Number(e.target.getAttribute('data-id')));
    updateTasksArray();
  }
});

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    editFunc(e);
  }
  updateTasksArray();
});

tasksSection.addEventListener('change', (e) => {
  if ((e.target.tagName === 'INPUT') && (e.target.type === 'checkbox')) {
    if (e.target.checked === false) {
      unchecked(e.target);
      restoreValue(Number(e.target.getAttribute('data-id')));
    } else {
      check(e.target);
      editValue(Number(e.target.getAttribute('data-id')));
    }
  }
  updateTasksArray();
});

reset.addEventListener('click', () => {
  localStorage.setItem('tasks', '[]');
  tasksSection.innerHTML = '';
  updateTasksArray();
});

clearBtn.addEventListener('click', clearCompletedTasks);

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault(e);
    addBtn.click();
  }
});

addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', () => {
  loadLocalStorage();
  updateTasksArray();
});

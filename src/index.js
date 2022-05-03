import './style.css';
import { loadLS, addTask, tasksSection } from '../modules/newFunc.js';
import { removeFunc, updateList } from '../modules/removeFunc.js';
import editFunc from '../modules/editFunc.js';
import {
  check, unchecked, editVal, restoreVal,
} from '../modules/check.js';
import clear from '../modules/clear.js';

const addBtn = document.getElementById('add-btn');
const clearBtn = document.querySelector('.clear');
const reset = document.querySelector('.reset');

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeFunc(e.target);
    updateList(e.target.getAttribute('data-id'));
  }
});

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    editFunc(e);
  }
});

tasksSection.addEventListener('change', (e) => {
  if ((e.target.tagName === 'INPUT') && (e.target.type === 'checkbox')) {
    if (e.target.checked === false) {
      unchecked(e.target);
      restoreVal(e.target.getAttribute('data-id'));
    } else {
      check(e.target);
      editVal(e.target.getAttribute('data-id'));
    }
  }
});

reset.addEventListener('click', () => {
  window.localStorage.clear();
  tasksSection.innerHTML = '';
});
clearBtn.addEventListener('click', clear);
addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadLS);
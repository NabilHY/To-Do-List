/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import './style.css';
import { loadLS, addTask, tasksSection } from '../newFunc.js';
import { removeFunc, updateList } from '../removeFunc.js';
import { editFunc } from '../editFunc.js';
import {
  check, unchecked, editVal, restoreVal,
} from '../check.js';

const addBtn = document.getElementById('add-btn');

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

addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadLS);
import './style.css';
import { loadLS, addTask } from '../newFunc.js';

const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadLS);
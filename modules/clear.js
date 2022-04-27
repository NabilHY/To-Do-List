import { loadLS, tasksSection } from './newFunc.js';

const clear = () => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  const filtered = arr.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filtered));
  tasksSection.innerHTML = '';
  loadLS();
};

export default clear;
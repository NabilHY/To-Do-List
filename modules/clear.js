import { tasksSection } from './task.js';
import loadLocalStorage from './local-storage.js';

const clearCompletedTasks = () => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  const filtered = arr.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filtered));
  tasksSection.innerHTML = '';
  loadLocalStorage();
};

export default clearCompletedTasks;
import _ from 'lodash';
import './style.css';

const tasksSection = document.querySelector('.task-section');


const tasks = [
  {
    description: 'Clean Room',
    completed: false,
    index: 1
  },
  {
    description: 'Go Shopping',
    completed: false,
    index: 2
  },
  {
    description: 'Walk Dog',
    completed: false,
    index: 3
  },
]
console.log(tasks);

const itterate = () => {
  tasks.forEach((task) => {
    const newTask = document.createElement('p');
    newTask.innerText = `${task.description}`;
    tasksSection.appendChild(newTask);
  })
}

document.addEventListener('DOMContentLoaded', () => {
  itterate();
})














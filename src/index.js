import './style.css';

const tasksSection = document.querySelector('.task-section');

const tasks = [
  {
    description: 'Clean Room',
    completed: false,
    index: 1,
  },
  {
    description: 'Go Shopping',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk Dog',
    completed: false,
    index: 3,
  },
];

const itterate = () => {
  tasks.forEach((task) => {
    const newTask = document.createElement('div');
    newTask.classList.add('task-row');
    const rmvIcon = document.createElement('i');
    rmvIcon.classList.add('fa-regular');
    rmvIcon.classList.add('fa-square-full');
    const div = document.createElement('div');
    const taskText = document.createElement('p');
    taskText.innerHTML = `${task.description}`;
    const square = document.createElement('i');
    square.classList.add('fa-regular');
    square.classList.add('fa-pen-to-square');
    div.append(square, taskText);
    newTask.append(div, square);
    tasksSection.appendChild(newTask);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  itterate();
});

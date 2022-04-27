const editFunc = (e) => {
  const element = (e.target.parentElement.parentElement.parentElement.children[1]);
  const message = document.createElement('div');
  message.classList.add('edit-message');
  const p = document.createElement('p');
  p.innerText = 'Press Enter after editing your Task';
  message.appendChild(p);
  document.body.appendChild(message);
  setTimeout(() => {
    const element = document.querySelector('.edit-message');
    element.classList.add('none');
  }, 3000);
  element.setAttribute('value', '');
  element.removeAttribute('readonly');
  element.focus();
  e.target.setAttribute('class', 'fa-solid fa-check check');
  element.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      element.setAttribute('readonly', 'readonly');
      e.target.setAttribute('class', 'edit-btn fa-regular fa-pen-to-square');
      const index = parseInt(e.target.getAttribute('data-id'), 10);
      const arr = JSON.parse(localStorage.getItem('tasks'));
      arr.forEach((task) => {
        if (task.id === index) {
          task.description = element.value;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(arr));
    }
  });
};

export default editFunc;
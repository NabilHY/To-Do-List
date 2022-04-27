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
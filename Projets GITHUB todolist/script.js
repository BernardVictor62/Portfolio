const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText.length === 0) return;
  todos.push({text: todoText, completed: false});
  input.value = '';
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="todo-${index}" ${todo.completed ? 'checked' : ''}>
      <label for="todo-${index}" class="${todo.completed ? 'completed' : ''}">${todo.text}</label>
      <button data-index="${index}">Delete</button>
    `;
    todoList.appendChild(li);

    const checkbox = li.querySelector('input');
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      li.querySelector('label').classList.toggle('completed');
    });

    const deleteButton = li.querySelector('button');
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });
  });
}

"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
  due_date: "due_date" 
};

const todos = [];
const errTodoNotFound = (todoId) => {
  return `Todo с id ${todoId} не найден`;
};

const getNewTodoId = (todos) => 
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text, dueDate = null) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
    [todoKeys.due_date]: dueDate
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId); 
  if (todo === undefined) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};


document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('.form');
  const input = document.querySelector('.input');
  const todosContainer = document.querySelector('.todos');
  const submitButton = document.querySelector('.button-create');
  
  console.log('Найденные элементы:', { form, input, todosContainer, submitButton });
  

  if (!form || !input || !todosContainer || !submitButton) {
    console.error('Ошибка: Не найдены необходимые DOM элементы!');
    return;
  }


  const createTodoElement = (todo) => {
    const todoElement = document.createElement('li');
    todoElement.className = `todo ${todo[todoKeys.is_completed] ? 'completed' : ''}`;
    todoElement.dataset.id = todo[todoKeys.id];
    
    todoElement.innerHTML = `
      <div class="todo-text">${todo[todoKeys.text]}</div>
      <div class="todo-actions">
        <button type="button" class="button-complete button" title="Завершить">&#10004;</button>
        <button type="button" class="button-delete button" title="Удалить">&#10006;</button>
      </div>
    `;
    
  
    const completeBtn = todoElement.querySelector('.button-complete');
    const deleteBtn = todoElement.querySelector('.button-delete');
    
    completeBtn.addEventListener('click', () => {
      const updatedTodo = completeTodoById(todos, todo[todoKeys.id]);
      if (updatedTodo) {
        todoElement.classList.toggle('completed');
        console.log('Задача обновлена:', updatedTodo);
      }
    });
    
    deleteBtn.addEventListener('click', () => {
      if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
        deleteTodoById(todos, todo[todoKeys.id]);
        todoElement.remove();
        console.log('Задача удалена. Осталось задач:', todos.length);
      }
    });
    
    return todoElement;
  };

  
  const handleCreateTodo = (todos, text) => {
    if (!text.trim()) {
      alert('Введите текст задачи!');
      input.focus();
      return null;
    }
    
    const newTodo = createTodo(todos, text);
    const todoElement = createTodoElement(newTodo);
    todosContainer.appendChild(todoElement);
    input.value = '';
    input.focus();
    
    console.log('Добавлена новая задача:', newTodo);
    console.log('Всего задач:', todos.length);
    return newTodo;
  };


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCreateTodo(todos, input.value);
  });


  input.addEventListener('input', () => {
    submitButton.disabled = !input.value.trim();
  });


  submitButton.disabled = true;
  
  console.log(' Todo приложение запущено! Готово к работе.');
  console.log(' Введите текст задачи и нажмите "Добавить" или Enter');
});
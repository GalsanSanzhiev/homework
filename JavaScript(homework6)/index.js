"use strict";

// {
//   id:1,
//   text: "Todo",
//   is_completed: false,
// }

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
  due_date: "due_date" 
}


const todos = [];
const errTodoNotFound = (todoId) => {
  return `Todo with id ${todoId} not found`
}

const getNewTodoIt = (todos) => 
  todos.reduce((maxId, todo ) => { return Math.max(maxId, todo[todoKeys.id]);}, 0) + 1



const createTodo = (todos, text, dueDate = null) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoIt(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
    [todoKeys.due_date]: dueDate
  }
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
}


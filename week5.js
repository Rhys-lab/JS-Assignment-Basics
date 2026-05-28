const todos = [
  { id: 1, title: "Learn JavaScript", completed: false, priority: "High" },
  { id: 2, title: "Build Small Project", completed: true, priority: "Medium" },
  { id: 3, title: "Practice Array Methods", completed: false, priority: "Low" },
  { id: 4, title: "Study React Basics", completed: true, priority: "High" },
  { id: 5, title: "Complete UI Design", completed: false, priority: "Medium" },
  { id: 6, title: "Fix Login Bug", completed: true, priority: "High" },
  { id: 7, title: "Read API Documentation", completed: false, priority: "Low" },
];

function addTodo(title, priority) {
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false,
    priority: priority,
  };

  todos.push(newTodo);

  return todos;
}

function searchTodo(search) {
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase()),
  );
}

function getCompletedTodos() {
  return todos.filter((todo) => todo.completed === true);
}

function getPendingTodos() {
  return todos.filter((todo) => todo.completed === false);
}

function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }

  return todos;
}

function countCompletedTodos() {
  return todos.filter((todo) => todo.completed === true).length;
}

console.log("========== ALL TASKS ==========");
console.log(todos);

addTodo("Learn Node.js", "High");

console.log("========== AFTER ADD TODO ==========");
console.log(todos);

console.log("========== SEARCH TASK ==========");

const searchResult = searchTodo("React");

console.log(searchResult);

console.log("========== COMPLETED TASKS ==========");

const completedTasks = getCompletedTodos();

console.log(completedTasks);

console.log("========== PENDING TASKS ==========");

const pendingTasks = getPendingTodos();

console.log(pendingTasks);

deleteTodo(3);

console.log("========== AFTER DELETE ==========");

console.log(todos);

console.log("========== COMPLETED TASK COUNT ==========");

console.log(countCompletedTodos());

console.log("*********************************************************");

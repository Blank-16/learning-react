<script>
  import { onMount } from 'svelte';
  import TodoForm from './lib/TodoForm.svelte';
  import TodoList from './lib/TodoList.svelte';
  import FilterTabs from './lib/FilterTabs.svelte';
  
  let todos = [];
  let currentFilter = 'all';
  let nextId = 1;
  
  // Reactive statements for counts
  $: totalCount = todos.length;
  $: completedCount = todos.filter(t => t.completed).length;
  $: activeCount = totalCount - completedCount;
  $: filteredTodos = getFilteredTodos();
  $: hasCompleted = completedCount > 0;
  
  function getFilteredTodos() {
    switch (currentFilter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
  
  function addTodo(text) {
    const todo = {
      id: nextId++,
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    todos = [todo, ...todos];
  }
  
  function toggleTodo(id) {
    todos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  
  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }
  
  function editTodo(id, newText) {
    if (newText.trim()) {
      todos = todos.map(todo => 
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      );
    }
  }
  
  function setFilter(filter) {
    currentFilter = filter;
  }
  
  function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
  }
  
  // Load todos from localStorage on mount
  onMount(() => {
    const saved = localStorage.getItem('svelte-todos');
    if (saved) {
      try {
        const parsedTodos = JSON.parse(saved);
        if (Array.isArray(parsedTodos)) {
          todos = parsedTodos;
          nextId = Math.max(...parsedTodos.map(t => t.id), 0) + 1;
        }
      } catch (e) {
        console.error('Error loading todos from localStorage:', e);
      }
    }
  });
  
  // Save todos to localStorage whenever todos change
  $: if (typeof localStorage !== 'undefined') {
    localStorage.setItem('svelte-todos', JSON.stringify(todos));
  }
</script>

<div class="container">
  <!-- Header -->
  <div class="header">
    <h1>Todo App</h1>
    <p>Stay organized and get things done</p>
  </div>

  <!-- Add Todo Form -->
  <TodoForm on:addTodo={(e) => addTodo(e.detail)} />

  <!-- Filter Tabs -->
  <FilterTabs 
    {currentFilter} 
    {totalCount} 
    {activeCount} 
    {completedCount}
    on:setFilter={(e) => setFilter(e.detail)} 
  />

  <!-- Todo List -->
  <TodoList 
    todos={filteredTodos} 
    on:toggleTodo={(e) => toggleTodo(e.detail)}
    on:deleteTodo={(e) => deleteTodo(e.detail)}
    on:editTodo={(e) => editTodo(e.detail.id, e.detail.text)}
  />

  <!-- Clear Completed Button -->
  <div class="clear-completed-container">
    <button 
      class="btn btn-danger clear-completed-btn {hasCompleted ? '' : 'hidden'}"
      on:click={clearCompleted}
    >
      Clear Completed
    </button>
  </div>
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  import TodoItem from './TodoItem.svelte';
  
  const dispatch = createEventDispatcher();
  
  export let todos;
  
  function handleToggleTodo(event) {
    dispatch('toggleTodo', event.detail);
  }
  
  function handleDeleteTodo(event) {
    dispatch('deleteTodo', event.detail);
  }
  
  function handleEditTodo(event) {
    dispatch('editTodo', event.detail);
  }
</script>

<div class="todo-list">
  {#each todos as todo (todo.id)}
    <TodoItem 
      {todo}
      on:toggleTodo={handleToggleTodo}
      on:deleteTodo={handleDeleteTodo}
      on:editTodo={handleEditTodo}
    />
  {/each}
  
  <!-- Empty State -->
  {#if todos.length === 0}
    <div class="empty-state">
      <div class="empty-state-icon">📝</div>
      <h3>No todos yet</h3>
      <p>Add a todo above to get started!</p>
    </div>
  {/if}
</div>

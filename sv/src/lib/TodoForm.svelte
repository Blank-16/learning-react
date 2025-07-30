<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let todoText = '';
  
  function handleSubmit(event) {
    event.preventDefault();
    if (todoText.trim()) {
      dispatch('addTodo', todoText);
      todoText = '';
    }
  }
</script>

<div class="card">
  <form on:submit={handleSubmit} class="todo-form">
    <input 
      bind:value={todoText}
      type="text" 
      placeholder="What needs to be done?" 
      class="todo-input"
      required
    />
    <button 
      type="submit" 
      class="btn btn-primary"
    >
      Add
    </button>
  </form>
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let todo;
  
  let isEditing = false;
  let editText = todo.text;
  let inputElement;
  
  function handleToggle() {
    dispatch('toggleTodo', todo.id);
  }
  
  function handleDelete() {
    dispatch('deleteTodo', todo.id);
  }
  
  function startEdit() {
    if (!todo.completed) {
      isEditing = true;
      editText = todo.text;
      setTimeout(() => {
        if (inputElement) {
          inputElement.focus();
          inputElement.select();
        }
      }, 0);
    }
  }
  
  function handleEdit() {
    if (editText.trim()) {
      dispatch('editTodo', { id: todo.id, text: editText });
      isEditing = false;
    } else {
      cancelEdit();
    }
  }
  
  function cancelEdit() {
    isEditing = false;
    editText = todo.text;
  }
  
  function handleKeydown(event) {
    if (event.key === 'Enter') {
      handleEdit();
    } else if (event.key === 'Escape') {
      cancelEdit();
    }
  }
  
  function handleBlur() {
    handleEdit();
  }
</script>

<div class="todo-item">
  <!-- Checkbox -->
  <input 
    type="checkbox" 
    checked={todo.completed}
    on:change={handleToggle}
    class="todo-checkbox"
  />
  
  <!-- Todo Text -->
  {#if isEditing}
    <input 
      bind:this={inputElement}
      bind:value={editText}
      on:keydown={handleKeydown}
      on:blur={handleBlur}
      class="todo-edit-input"
    />
  {:else}
    <span 
      class="todo-text {todo.completed ? 'completed' : ''}"
      on:click={startEdit}
      on:keydown={(e) => e.key === 'Enter' && startEdit()}
      tabindex="0"
      role="button"
    >
      {todo.text}
    </span>
  {/if}
  
  <!-- Action Buttons -->
  <div class="todo-actions">
    {#if !isEditing}
      <!-- Edit Button -->
      <button 
        on:click={startEdit}
        disabled={todo.completed}
        class="action-btn edit"
        aria-label="Edit todo"
      >
        ✏️
      </button>
      
      <!-- Delete Button -->
      <button 
        on:click={handleDelete}
        class="action-btn delete"
        aria-label="Delete todo"
      >
        🗑️
      </button>
    {:else}
      <!-- Save Button -->
      <button 
        on:click={handleEdit}
        class="action-btn save"
        aria-label="Save changes"
      >
        ✅
      </button>
      
      <!-- Cancel Button -->
      <button 
        on:click={cancelEdit}
        class="action-btn delete"
        aria-label="Cancel editing"
      >
        ❌
      </button>
    {/if}
  </div>
</div>

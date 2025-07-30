<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let currentFilter;
  export let totalCount;
  export let activeCount;
  export let completedCount;
  
  function handleFilterClick(filter) {
    dispatch('setFilter', filter);
  }
</script>

<div class="filter-tabs">
  <button 
    class="filter-btn {currentFilter === 'all' ? 'active' : ''}"
    on:click={() => handleFilterClick('all')}
  >
    All <span class="count-badge">{totalCount}</span>
  </button>
  <button 
    class="filter-btn {currentFilter === 'active' ? 'active' : ''}"
    on:click={() => handleFilterClick('active')}
  >
    Active <span class="count-badge">{activeCount}</span>
  </button>
  <button 
    class="filter-btn {currentFilter === 'completed' ? 'active' : ''}"
    on:click={() => handleFilterClick('completed')}
  >
    Completed <span class="count-badge">{completedCount}</span>
  </button>
</div>

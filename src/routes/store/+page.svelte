<script lang="ts">
	import { count, createCount, useCounter } from './store';
	import Decrementer from './Decrementer.svelte';

	const { count: count2, increment, decrement, reset } = useCounter();
	const count3 = createCount();
</script>

<h1>The count is {$count}</h1>

<button on:click={() => count.update((count) => count + 1)}>+</button>
<Decrementer />
<button on:click={() => count.set(0)}>Reset</button>

<h1>The count is {$count2}</h1>

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>Reset</button>

<h1>The count is {$count3}</h1>

<button on:click={count3.increment}>+</button>
<button on:click={count3.decrement}>-</button>
<button on:click={count3.reset}>Reset</button>

<script lang="ts">
	import { count } from './store';

	function decrement() {
		count.update((count) => count - 1);
	}
</script>

<button on:click={decrement}>-</button>

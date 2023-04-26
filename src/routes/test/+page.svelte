<script lang="ts">
	import Nested from './Nested.svelte';
	let numbers = [1, 2, 3, 4];
	$: sum = numbers.reduce((sum, number) => sum + number, 0);

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}
</script>

<button on:click={addNumber}>Add a number</button>

<p>{numbers.join(' + ')} = {sum}</p>

<Nested answer={sum} />

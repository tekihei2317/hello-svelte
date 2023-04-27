<script lang="ts">
	// setup code goes here
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ message: { text: string } }>();

	export let sayHello2: (detail: { text: string }) => void;

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}

	function handleSayHello() {
		sayHello();
		sayHello2({ text: 'Hello!' });
	}
</script>

<button on:click={handleSayHello}> Click to say hello </button>

<script lang="ts">
	import Thing from './Thing.svelte';

	// ifの使い方
	let user = { loggedIn: false };
	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

	// eachの使い方
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	// eachのkeyの使い方
	type Emoji = 'apple' | 'banana' | 'carrot' | 'doughnut' | 'egg';
	let things: { id: number; name: Emoji }[] = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function removeFirst() {
		things = things.slice(1);
	}

	// await
	const promise: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(100), 500));
</script>

{#if user.loggedIn}
	<button on:click={toggle}>Log out</button>
{:else}
	<button on:click={toggle}>Log in</button>
{/if}

{#each cats as cat}
	<li>
		<a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
			{cat.name}
		</a>
	</li>
{/each}

<button on:click={removeFirst}>Remove first</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{/await}

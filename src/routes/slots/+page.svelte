<script lang="ts">
	import Box from './Box.svelte';
	import ContactCard from './ContactCard.svelte';
	import Hoverable from './Hoverable.svelte';
</script>

<Box>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>

<Box />

<ContactCard>
	<span slot="name"> P. Sherman </span>
	<span slot="address">
		42 Wallaby Way<br />
		Sydney
	</span>
	<span slot="email">p-sherman@example.com</span>
</ContactCard>

<Hoverable let:hovering>
	<div class:active={hovering}>
		{#if hovering}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<style>
	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>

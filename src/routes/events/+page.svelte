<script lang="ts">
	import Inner from './Inner.svelte';

	let m = {
		x: 0,
		y: 0
	};

	function handleMousemove(event: MouseEvent) {
		m = {
			x: event.clientX,
			y: event.clientY
		};
	}
</script>

<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<button on:click|once={() => alert('no more alert')}>Click once</button>

<Inner
	on:message={(event) => alert(event.detail.text)}
	sayHello2={(detail) => alert(detail.text)}
/>

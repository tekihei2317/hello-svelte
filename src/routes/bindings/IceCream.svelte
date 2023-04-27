<script lang="ts">
	let scoops = 1;
	let flavours = ['Mint choc chip'];

	let options = {
		scoops: [
			{ label: 'One scoop', value: 1 },
			{ label: 'Two scoops', value: 2 },
			{ label: 'Three scoops', value: 3 }
		],
		flavours: ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple']
	};

	function join(flavours: string[]): string {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}
</script>

<h2>Size</h2>

{#each options.scoops as option}
	<label>
		<input type="radio" bind:group={scoops} name="scoops" value={option.value} />
		{option.label}
	</label>
{/each}

<h2>Flavours</h2>

{#each options.flavours as option}
	<label>
		<input type="checkbox" bind:group={flavours} name="flavours" value={option} />
		{option}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops}
		{scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if}

<script lang="ts">
	import IceCream from './IceCream.svelte';
	import InputField from './InputField.svelte';
	import Keypad from './Keypad.svelte';
	import Questions from './Questions.svelte';
	import Todos from './Todos.svelte';

	let name = 'world';
	let a = 1;
	let b = 2;
	let confirm = false;

	let pin = '';
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';
	function handleSubmit() {
		alert(`submitted ${pin}`);
	}

	let field: InputField;
</script>

<input bind:value={name} />
<h1>Hello, {name}</h1>

<input type="number" bind:value={a} min="0" max="10" />
<input type="number" bind:value={b} min="0" max="10" />

<p>{a} + {b} = {a + b}</p>

<label>
	<input type="checkbox" bind:checked={confirm} />
	Confirm
</label>
<button disabled={!confirm}>Subscribe</button>

<IceCream />

<Questions />

<Todos />

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
<Keypad bind:value={pin} on:submit={handleSubmit} />

<InputField bind:this={field} />
<button on:click={() => field.focus()}>Focus field</button>

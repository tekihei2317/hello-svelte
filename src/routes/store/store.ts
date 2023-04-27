import { writable } from 'svelte/store';

export const count = writable(0);

export function useCounter() {
	const count = writable(0);

	function increment() {
		count.update((value) => value + 1);
	}

	function decrement() {
		count.update((value) => value - 1);
	}

	function reset() {
		count.set(0);
	}

	return { count, increment, decrement, reset };
}

export function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((v) => v + 1),
		decrement: () => update((v) => v - 1),
		reset: () => set(0)
	};
}

# hello-svelte

```bash
npm install
npm run dev
```

## チュートリアル

[Introduction / Basics • Svelte Tutorial](https://svelte.jp/tutorial/basics)

### 1~3

`$:`というラベルをつけると、派生データを作成できる。`$:`の後ろには処理を書くこともでき、参照しているデータが変更されたときに実行される。

Svelteのリアクティビティは代入によってトリガーされる。そのため、例えば配列の追加だと`Array.prototype.push`ではトリガーされず、分割代入などを使う必要がある。

オブジェクト場合は、プロパティに代入するだけでトリガーされる。Reactの癖で分割代入をしてしまいそうな気がするが、それでも問題はなさそう。

scriptタグの中に書くのがSvelte独自の構文なので、例えばReactのHooksみたいなものを作ろうとすると、それはtsファイルに書けないのでどうするんだろうというのが気になった。

→8. Storeに書かれていました

### 4~6

制御構文には条件分岐（if）、ループ（each）、非同期（await）などがある。Svelteでは、制御構文の開始を`#`、継続を`:`、終了を`/`で表す。

子コンポーネントから親コンポーネントへイベントを発行するためには、`createEventDispatcher`を使う。この関数はは`{ eventName: payload }`というようなジェネリクスを取ることができ、親コンポーネントで受け取るときに型を使用できる。

[svelte event parameter type for typescript - Stack Overflow](https://stackoverflow.com/questions/64087782/svelte-event-parameter-type-for-typescript)

Reactのように、イベントハンドラを親から子に渡して親の状態を更新することもできる。

`input`などの入力要素で、入力した値をデータにバインドするためには`bind:value`を使う。Vueと比較すると、`props`にバインドができる点が違う。Reactと比較すると、`value`と`onChange`の両方を渡さなくて良くなるので、便利なような気がする。チュートリアルには「データの流れが分かりにくくなるので使用は控えめにしよう」と書かれていた。

`bind:this`で、HTML要素やコンポーネントへの参照を取得できる。

### 8. Store

`.svelte`ファイルの外でリアクティブな値を作成するためには、ストアを使う。ストアは、複数のコンポーネントから同じ値を参照することもできる。

ストアには、書き込みができる`writable`と、読み取りのみの`readable`がある。`readable`は、作成するときに更新関数を渡すAPIになっているので、ユーザーのアクションに応じて更新することはできない。

Svelteのストアは、`subscribe`メソッドを正しく実装しているオブジェクトのことをいう。Readableはsubscribeメソッドのみをもち、Writableはそれに加えてsetとupdateメソッドをもつ。

そのため、Reactのカスタムフックのようなものを作成することもできる。これをカスタムストアという。Readableなストアよりカスタムストアを使う機会の方が多い気がする。

<details>
<summary>カスタムストア</summary>

```ts
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}
```
</details>

<details>
<summary>使用例</summary>

```html
<script>
	import { count } from './stores';
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
```
</details>

setメソッドを持つストアは、コンポーネントにバインドすることができる。

### 14. コンポーネントの合成

あるコンポーネントと別のコンポーネントを組み合わせるためにはスロットを使用します。スロットは、Reactでいうとchildrenです。スロットに名前をつけて、複数のスロットを使うこともできます。

Reactでchildrenでコンポーネントを合成するときは、互いに影響を与えることはありません（互いに依存しない）。例えば、LayoutコンポーネントのchildrenにProfileコンポーネントを渡すとき、LayoutはProfileによらずLayoutのままで、Profileも同様です。

```tsx
<Layout>
  <Profile />
</Layout>
```

Svelteではスロットに対してPropsを渡すことができます。つまり、外側のコンポーネントの中にあるデータを、内側のコンポーネントで受け取れるということです。ReactのRenderPropsに相当します。

<details>
<summary>Slot props</summary>

```html
<!-- Hoverable.svelte -->
<script lang="ts">
	let hovering: boolean;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<slot {hovering} />
</div>

<!-- +page.svelte -->
<Hoverable let:hovering>
	<div class:active={hovering}>
		{#if hovering}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>
```

</details>

<details>
<summary>Render props(React)</summary>

```tsx
type HoverableProps = {
	children: (props: { hovering: boolean }) => JSX.Element;
};

const Hoverable = ({ children }: HoverableProps) => {
	const hovering = useState(false);

	return <div>{children({ hovering })}</div>;
};

const Page = () => {
	return (
		<Hoverable>
			{(hovering) => (
				<div>{hovering ? <p>I am being hovered upon.</p> : <p>Hover over me!</p>}</div>
			)}
		</Hoverable>
	);
};
```
</details>

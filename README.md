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

### 4~6

制御構文には条件分岐（if）、ループ（each）、非同期（await）などがある。Svelteでは、制御構文の開始を`#`、継続を`:`、終了を`/`で表す。

子コンポーネントから親コンポーネントへイベントを発行するためには、`createEventDispatcher`を使う。この関数はは`{ eventName: payload }`というようなジェネリクスを取ることができ、親コンポーネントで受け取るときに型を使用できる。

[svelte event parameter type for typescript - Stack Overflow](https://stackoverflow.com/questions/64087782/svelte-event-parameter-type-for-typescript)

Reactのように、イベントハンドラを親から子に渡して親の状態を更新することもできる。

`input`などの入力要素で、入力した値をデータにバインドするためには`bind:value`を使う。Vueと比較すると、`props`にバインドができる点が違う。Reactと比較すると、`value`と`onChange`の両方を渡さなくて良くなるので、便利なような気がする。チュートリアルには「データの流れが分かりにくくなるので使用は控えめにしよう」と書かれていた。

`bind:this`で、HTML要素やコンポーネントへの参照を取得できる。

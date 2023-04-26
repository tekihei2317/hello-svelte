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

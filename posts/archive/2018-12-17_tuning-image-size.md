---
title: "Tuning image size \U0001F4F1"
description: 今日のやったこと
date: 2018-12-17
---

![12月17日は[飛行機の日](http://www.nnh.to/12/17.html)、北海道行きたい](https://cdn-images-1.medium.com/max/800/1*DX2pvQhIiZ844FOKVGFLVw.png)
12月17日は[飛行機の日](http://www.nnh.to/12/17.html)、北海道行きたい

### 画像サイズがでかい

スマホで撮った写真のサイズがでかい。撮ったものをFirebaseのCloud Storageに入れているんだけどなかなか時間がかかる。でもリサイズしたくないのでクライアントでいい感じに圧縮する技術とかないのかなって思ってるんだけどなんかあるのかな〜、もうちょい探そう…。

### create-react-appでNODE_PATHを設定した

.envに`NODE_PATH` を設定するとwebpackのaliasみたいにimport文で相対パスを使わなくてよくなる。なるんだが、FlowとESLintで解決できなくなるので対応してあげる必要がある。

create-react-appを普段そんなに使わないのでどうすりゃいいのかなぁ〜って思ったら[この記事](https://itnext.io/configure-absolute-paths-with-create-react-app-and-flow-e4b8922676a2)にたどり着いてすぐ対応できた。ありがたや 🙏

こういう記事に巡り会えると本当に感謝感謝で、記事を書いてくれてありがとう！となる。自分もそうなれるようにちゃんと毎日書くぞ、と再び思った。

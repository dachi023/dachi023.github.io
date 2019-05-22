---
layout: post
title: "Enjoy React.Suspense & React.lazy() \U0001F43C"
description: 今日のやったこと
date: 2018-12-05
---

![12月05日は[モーツァルトの忌日](http://www.nnh.to/12/05.html)](https://cdn-images-1.medium.com/max/800/1*uTXEDHGkQLEWi6oX_oIFGQ.png)
12月05日は[モーツァルトの忌日](http://www.nnh.to/12/05.html)

### React.Suspense 完全に理解したわ〜

昨日の夜くらいからSuspenseまわりを実戦投入しようとごにょごにょしてたんだけど実装をちゃんと理解してなかったのもあってひどいことになった。で、今朝は通勤途中にドキュメントをちゃんと読んで午前中やってみたらいい感じに動きそうな匂いがしてきた。

ドキュメントしっかり読み込むの苦手マンなところがあるんでちゃんと改善していこうっていう話はありつつも、やっぱ手を動かしてる方がスッと入ってくるものがあるので上手くバランス取れるようにしていこうなって思った。今日・明日くらいにはComponentを整えてProduction環境でデビューさせてあげたい

### React 16.x Roadmap 読み直し

[昨日の投稿](https://medium.com/@dachi/154edabf6696)にも書いたけど今日になってさらに「んで、Reactユーザとして何すればいいんだっけ〜」を理解したかったので読み直してみた。

*   16.6: Suspenseを利用したコード分割  
    `React.lazy()` によるComponentのDynamic importが使える。  
    `[@babel/plugin-syntax-dynamic-import](https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import)` 入れれば動く。
*   16.x: Hooksの追加  
    このあたりからClass構文のComponentを減らす努力をして行きたい。
*   16.x: Concurrent Mode  
    Time Slicingって呼んでたやつ？Componentの描画がメインスレッドをブロックしないので操作がスムーズなのかい？ちゃんと理解してない。
*   16.x: Suspense for Data Fetching  
    `react-cache` の説明がここから出てきてる。  
    fetch & cacheを基本形としてデータ取得するサンプルが書いてある。  
    Suspenseの実戦的な使い方、って感じがある。

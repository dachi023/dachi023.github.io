---
title: "Deploying Docker app on GAE \U0001F433"
description: 今日のやったこと
date: 2019-01-22
---

![1月22日は[カレーの日](http://www.nnh.to/01/22.html)、カレー食べたい](https://cdn-images-1.medium.com/max/800/0*ipJfptDV5JqZcvYn.png)
1月22日は[カレーの日](http://www.nnh.to/01/22.html)、カレー食べたい

### GAEにデプロイ2日目

[昨日](https://medium.com/@dachi/my-memory-has-gone-away-d1944bf1ef4b)の続き。いろいろ試行錯誤した結果、nodeのalpineイメージでGAEにちゃんとデプロイできた。だいぶ時間かかったけどなんとかなったので良かった。ちなみに、ハマったポイントはこんなかんじ。

*   デプロイ時にGAE側で `node_modules` を消してるっぽくて、  
    実行時に必要なものまで消えちゃってた
*   8080番ポートで待ち受けておかないとだめ
*   Expressだったら `app.enable('trust proxy')` しないとだめ

node\_modules消えちゃうのが1番納得いってないけど、まあそういうものなのかな…仕方ないのかな…と今のところは思ってる。

デプロイできたのはいいけどローカルで実行するよりも効率悪くなっちゃったので次はマシンスペックとかをごにょごにょしないとだめっぽい。

---
title: "Manage “Atomic Design” \U0001F3A8"
description: 今日のやったこと
date: 2019-01-10
---

![1月10日は[明太子の日](http://www.nnh.to/01/10.html)、明太子おにぎりはうまい](https://cdn-images-1.medium.com/max/800/1*a-nt-Tuqgavai8ylpp23Ow.png)
1月10日は[明太子の日](http://www.nnh.to/01/10.html)、明太子おにぎりはうまい

### Atomic Designの継続的運用

Atomic Designを取り入れてディレクトリに落としてから2ヶ月くらい経ったので振り返ってみる。

1番良かったのはMoleculesという概念のおかげでパーツが組み合わさっている状態で共通化ができる、というところ。これによって実装はかなり楽になったと思うしUIもブレがなくなったと思う。それ以上大きくなりそうで共通化が難しいとなればOrganismsになるし、そういう基準ができたのが大きなメリット。他に良かった点としてはComponent指向との相性がいいこと。React使ってて良かった。

悪い、というか難しいのはMoleculesとOrganismsを分けるための基準を決めることだと思う。僕の場合[この記事](https://frasco.io/atomic-design-molecules-organisms-dc937b5989)をめちゃくちゃ参考にさせてもらった。これのおかげでまともに運用できてるまである。良くも悪くもMoleculesが重要なのがAtomic Designだと感じている。

正直なところ、途中から概念を突っ込んだのでまだディレクトリがとっ散らかってて技術記事としてドヤドヤと書くのは気が引ける。人に見せられるレベルになったらちゃんと記事を書こう。

---
layout: post
title: "Front-end lunch at Shibuya \U0001F371"
description: 今日のやったこと
date: 2018-12-12
---

![12月12日は[バッテリーの日](http://www.nnh.to/12/12.html)、我が家の充電ケーブルは次々と子供に破壊されている](https://cdn-images-1.medium.com/max/800/1*mDdtyQuPMYE0Z24fIS9ThA.png)
12月12日は[バッテリーの日](http://www.nnh.to/12/12.html)、我が家の充電ケーブルは次々と子供に破壊されている

### フロントエンドランチをしてきた

本日もmedibaさんのオフィスへお邪魔してランチをしてきた。

「JSer.infoの今週号+気になったトピック」で3人くらいで話し合うランチにここ何回か混ぜてもらっている。自分とは違った観点だったり、興味を持ってる分野が少し違ったりするので会話するのは楽しいし、視野も広がるので最高。

ランチの内容は過去分も含め、[Scrapbox](https://scrapbox.io/mediba/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%A9%E3%83%B3%E3%83%81_27)にまとまっているのでぜひ。

孤独な状態でいろいろ考えることが多かった (周りに同じようなことをやっている人があまりいなかった) ので、こういう機会ができて本当に嬉しいなぁと思う。

あと、久々に食べた[マルセイバターサンド](https://www.rokkatei-eshop.com/store/ProductDetail.aspx?sku=10051)が美味しかった…ありがとうございました 🙏 たまに近所の東急ストアでやってる北海道フェアとかで見かけるけど高いから買う気がなかなか起きない…めちゃめちゃ美味しいんだけどね。

### create-react-app & firebase-tools 💨

用があってFirebaseを使ったアプリケーションを作り始めた。Firebaseを久々にちゃんと使ったんだけど、サイト公開するまで爆速すぎてびっくりしちゃった。

create-react-app  
→ firebase init  
→ .envの設定 (react-scriptsがwarn吐いてたので)  
→ firebase deploy

他にもHerokuとかNetlifyとかあって、それぞれとても便利なんだけどFirebaseはちょうどいい塩梅 (Herokuほどゴージャスすぎず、Netlifyほどシンプルすぎず) だなって思った。

Hosting以外はまだAuthenticationくらいしか触れてないので次はStorageとDatabase周りをごにょごにょしてみる。

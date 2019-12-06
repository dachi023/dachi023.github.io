---
layout: post
title: "Start “BONEN-KAI” days \U0001F37B"
description: 今日のやったこと
date: 2018-12-21
---

![12月21日は[バスケットボールの日](http://www.nnh.to/12/21.html)、毎回突き指するんだよなぁ](https://cdn-images-1.medium.com/max/800/1*7lsVE_OQc-96xByV8fIXyg.png)
12月21日は[バスケットボールの日](http://www.nnh.to/12/21.html)、毎回突き指するんだよなぁ

### Firestoreのリアルタイムリスナー

ドキュメントは[これ](https://firebase.google.com/docs/firestore/query-data/listen?hl=ja)。Firestore使うまでは「リアルタイム更新は面倒そうだからポーリングすればいいかなぁ〜」とか考えていたんだけども、そういえばSDKがいい感じにやってくれるやつあったな、なんて思い出したので使ってみた。

今回はReactで書いたwebアプリケーション上で新しく登録されたデータをどんどんページ上部に表示したいのでこんな感じで実装した。

componentDidMount() {  
  this.citiesRef = db.collection('cities')  
  this.citiesRef.orderBy('created', 'desc').onSnapshot(snapshot => {  
    const cities = \[\]  
    snapshot.forEach(doc => cities.push(doc.data().name))  
    this.setState({ cities: cities.concat(this.state.cities) })  
  })  
}

たったこれだけのコードでListenしてくれるってことにも感動だし、普通に考えたら面倒な実装をデフォでやってくれているのが嬉しい。これだけのためにFirestore使ってるまであるな…とか思った。

### 忘年会がいっぱい

気づけば今日から1週間、なんかしら飲む予定が入ってて年末感を感じた。そろそろ30代も見えてきたので無理せずにちゃんと家まで意識を持って帰れるようにしていきたい。たまに20代前半だった自分を思い出すとなぜこんなに身体がいうことを聞かなく…とか思っちゃう時があるのでなるべく運動したりして抗っていこう。

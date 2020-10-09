---
title: RIP EdgeHTML.
description: 今日のやったこと
date: 2018-12-11
---

![12月11日は[胃腸の日](http://www.nnh.to/12/11.html)、トイレが友達にならないよう気をつけましょう](https://cdn-images-1.medium.com/max/800/1*FFHVXD6wWspjD_exTeLfqw.png)
12月11日は[胃腸の日](http://www.nnh.to/12/11.html)、トイレが友達にならないよう気をつけましょう

### [JSer.info](https://jser.info/2018/12/11/gulp-4msedgechromium/) 今週号を読んだ

MSEdgeがレンダリングエンジンをEdgeHTMLからBlinkに切り替えることに対して喜んでいる人もいたし、多様性が失われることに嘆いてる人もいたし、たくさんの人が記事を書いたりコメントをしていたなぁ。個人的にはEdge対応で特に困ったことなど今まで一度もなかったし (そもそもちゃんとEdge対応したことがないだけなんだけど)、最近はBabelとかAutoprefixerが当たり前の世界でしか生きていなかったのでChromeとSafariでも差分を気にすることってそんなに多くなかったかなと思う。あと、喜んでるみなさんへ。悲しむ人もいるんだから大っぴらに喜んだり祭じゃ宴じゃ、とはしゃがずに心の中でそっと思っておけばいいんじゃないですかね。

[gulp 4.0](https://medium.com/gulpjs/92c6cd4beb45)が出たんだけども。かれこれ数年使ってないし今更使うことも今のところなさそう。どういう層に使われることを想定しているのかは気になる。

[Flow 0.88.0](https://github.com/facebook/flow/releases/tag/v0.88.0)がきた。Suspense入ったのでこれでIgnoreしてたやつを外せる…。 `Function` と `Object` が `any` のaliasになったとのこと、まあ今はほとんど使ってないのでいいんだけど。

### Flowへのおきもち

TSはとても魅力的なんだけどFlowの手軽さだったり、まだ社内のエンジニアの人数がそんな多くなかったり。あとは古いアプリケーションも動いてたりするのでそれらを考えると導入しやすさと統一のしやすさという意味で今はまだFlowかなと。人が増えてそれぞれの開発が疎になってくれば自由にやってもらってOKだと思うのでその時はその時で考える。同じコードをいつまでもいつまでも使い続けるイメージをしていないのでそれくらいがちょうどいいんじゃないかなあ。
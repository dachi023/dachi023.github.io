---
layout: post
title: "Generate static many pages \U0001F4C4"
description: 今日のやったこと
date: 2019-01-28
---

![1月28日は[データ・プライバシーの日](http://www.nnh.to/01/28.html)、個人情報漏えいには気をつけよう](https://cdn-images-1.medium.com/max/800/0*RtWOuMGDvdcFHHIp.png)
1月28日は[データ・プライバシーの日](http://www.nnh.to/01/28.html)、個人情報漏えいには気をつけよう

### PugとSpreadsheetでページの大量生成

[pugjs/pug](https://github.com/pugjs/pug) (旧Jade) というテンプレートエンジンとSpreadsheetをデータベース代わりに静的なページを大量に生成するバッチを書いてる。

世の中にはバックエンドの処理が不要なサイトはまあまああって、それをいかに効率よく制作するか？というのを考えた結果、テンプレートエンジンでマークアップを共通化しつつSpreadsheetをDBに見立てて、という形になった。これがイケてるのかどうかは分からないんだけど、バックエンドがないのでいろんな場所におけるのはメリットだと思う(S3とかgithub.ioとかとか)。

時代の流れに乗ったスタックでアプリケーションを組むことはメインの手段として持ちつつも、状況によってはこういうやり方もサクッと使えるようになってないといろんなお仕事こなせないなぁと思った。

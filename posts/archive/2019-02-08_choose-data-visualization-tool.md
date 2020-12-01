---
title: "Choose data visualization tool \U0001F46F"
description: 今日のやったこと
date: 2019-02-08
---

![2月8日は[〒マークの日](http://www.nnh.to/02/08.html)、「テ」から来てるらしい](https://cdn-images-1.medium.com/max/800/0*rZ_8pdmle6B5jS74.png)
2月8日は[〒マークの日](http://www.nnh.to/02/08.html)、「テ」から来てるらしい

## BIツールの選定

個人開発でBI使いたい〜となり、業務でも使ってるから[Redashを入れてみた](https://medium.com/@dachi/redash-on-heroku-5b45b366c2a9)のだけどGoogle Data Studio (日本版はGoogle データポータル) という手があるのでは？となって気になってきたので10分くらい触ってみた。

[**Data Studio Product Overview**  
_Unlock the power of your data with interactive dashboards and beautiful reports that inspire smarter business…_datastudio.google.com](https://datastudio.google.com "https://datastudio.google.com")[](https://datastudio.google.com)

### データソース

Googleの各種サービスとDB (MySQL / PostgreSQL) のデータソースはデフォである (もちろん自分でコネクタを作れるし、他の人が作ったデータソースコネクタを使うこともできる)

![これがデフォ。この下に開発者の制作物がずらーっと出てる](https://cdn-images-1.medium.com/max/800/1*Gk9VSAspJig9iiZ0BhS1mA.png)
これがデフォ。この下に開発者の制作物がずらーっと出てる

### ダッシュボード

グリッドが引かれていてこの上に好きなように配置できる。キミだけの最強ダッシュボードを作ろう！みたいなのには向いてると思う。

![この上にグラフを好きなサイズ、好きな位置で配置できる](https://cdn-images-1.medium.com/max/800/1*6j6PCcK1ZjAM1MifGqeNPw.png)
この上にグラフを好きなサイズ、好きな位置で配置できる

### 10分触った感想

Googleの各サービスとの連携はすごい楽 (当たり前だけど)。RedashだとGCPでサービスキー発行してそれをデータソース追加時に設定する必要があったりする。

ダッシュボードの配置とかはグリッドに沿って自由に伸縮できるのでだいぶ自由が効く感じで細かくやりたい人には向いてるかも。逆に自由すぎるのでめっちゃ細かいどうでもいいズレとか気にしてしまいそうだなって思った。個人的にはRedashのダッシュボードが好き。

グラフの作り方とかも結構違いそうかな〜って気はしてるけどまだ触ってないのでもうちょっと試してみる。

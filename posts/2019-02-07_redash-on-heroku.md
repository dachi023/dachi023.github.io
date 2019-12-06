---
layout: post
title: "Redash on Heroku \U0001F4CA"
description: 今日のやったこと
date: 2019-02-07
---

![2月7日は[フナの日](http://www.nnh.to/02/07.html)、鮒寿司っておいしいのかな？](https://cdn-images-1.medium.com/max/800/0*3JQqVAW0Y-k-8Pnl.png)
2月7日は[フナの日](http://www.nnh.to/02/07.html)、鮒寿司っておいしいのかな？

### Redashタイムアタック

Redashの環境構築(DockerコンテナつくってどこかにPushするまで)に何分かかるのか気になったので試してみた、メールサーバ連携は使う予定ないんで一旦無視した。

*   (1分) どこにPushするか決める → Herokuにした
*   (5分) “redash heroku”でググる → [先人がいた](https://github.com/willnet/redash-on-heroku)
*   (5分) 先人の知恵を借りつつDockerfileを書く
*   (5分) Herokuアプリケーションを作成して環境変数などを設定
*   (3分) Pushしてみる → ファイル名がおかしいことに気づき直す
*   (5分) 再度Pushし、無事デプロイ完了
*   (3分) URLを叩くと500エラー → スクリプトを流し忘れていたので実行
*   (1分) 画面をリロードしてRedashの画面が表示されることを確認

というわけでだいたい30分くらいで画面が表示されるところまでできた。あらためてRedashの素晴らしさに感動した。

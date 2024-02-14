---
title: "Vagrant has gone away \U0001F622"
description: 今日のやったこと
date: 2018-12-04
---

![12月04日は[E.T.の日](http://www.nnh.to/12/04.html)らしい](https://cdn-images-1.medium.com/max/800/1*PhaFkTETz_h6vFPGIJuhGQ.png)
12月04日は[E.T.の日](http://www.nnh.to/12/04.html)らしい

### 久しぶりにローカル環境が壊れた

Docker Toolboxをアップデートしましょ〜と思ってローカルで動いてたVMを止めてVirtualBoxとVagrantを終了して〜、とやっていたらPCを再起動したタイミングでVagrantが旅立たれてしまった。

ほとんど使ってないのでVirtualBoxのGUIで直接起動してもいいんだけど、なんだかVagrantがかわいそうなのでとりあえず最新版へのアップデートだけでも試してみた。

$ brew cask upgrade vagrant vagrant-manager

そしたら今度はvagrant-managerがalready installedで引っかかったので (なぜ上書きできなかったのだろう…) インストール済みのものを1回消してもう1回やったら無事入った。無事入ったし動くようになった、よかった。

### JSer.infoを読んだ

[**2018-12-04のJS: TypeScript 3.2、React 16.xロードマップ、ESLintのビルトインJSDocサポート終了の予定**  
\_JSer.info #412 - TypeScript 3.2が正式にリリースされました。\_jser.info](https://jser.info/2018/12/04/typescript-3.2react-16.xeslintjsdoc/ "https://jser.info/2018/12/04/typescript-3.2react-16.xeslintjsdoc/")[](https://jser.info/2018/12/04/typescript-3.2react-16.xeslintjsdoc/)

Reactに関する記事

[React 16.x Roadmap — React Blog](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)

[Lazy loading (and preloading) components in React 16.6](https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)

SuspenseやHooksをまだ実践投入できていないのでさっさと掴んで投入しよ、そしてその前にReact本体のバージョンを上げないといけない。

[**CSSのパフォーマンス改善**](https://csswizardry.com/2018/11/css-and-network-performance/)

ちゃんとチームでやっていかないとすぐ破綻しがち系なので、CIとかでチェックする仕組みとかあればいいのかな〜？

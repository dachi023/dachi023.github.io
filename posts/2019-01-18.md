---
title: "Development settings for macOS \U0001F4BB"
description: 今日のやったこと
date: 2019-01-18
---

![1月18日は[カスピ海ヨーグルトの日](http://www.nnh.to/11/18.html)、ヨーグルト美味しいよね](https://cdn-images-1.medium.com/max/800/1*_efWIqb07YSN-tySRRmB8g.png)
1月18日は[カスピ海ヨーグルトの日](http://www.nnh.to/11/18.html)、ヨーグルト美味しいよね

### 新しいMacで設定したこと

年末に新しい社用Macを貸してもらったのでちまちま設定してたのだけど今日やっと一段落したので、やったことをまとめる。

**Homebrewで入れたもの**

\# プログラミング言語  
goenv  
nodebrew  
ruby  
python

\# CLIツール  
awscli  
ghq  
heroku  
hub  
peco  
wget  
yarn

\# シェル  
fish

\# cask (アプリケーション)  
alfred  
docker  
docker-toolbox  
firefox  
google-chrome  
google-japanese-ime  
iterm2  
kap  
karabiner-elements  
sequel-pro  
slack  
tweeten  
vagrant  
vagrant-manager  
virtualbox  
visual-studio-code  
zeplin

**補足 💁‍♂**

- RubyとPythonは書くためではなくツールを使うために必要なのでバージョン管理不要で入れた
- シェルはbashかzshをこれまで使っていたけどfishにしてみた。ちょうど3.0が出たあとくらいで入れた。今のところとても満足してる
- アプリケーションはなるべくcaskで入れる。App Storeで課金してるやつとかはApp Storeで落としたけども

といった感じ。Time Machineからの復元をせずに綺麗にやり直したかったのと、初めてfishを使ったので最初躓いたがなんとかなった。

ghqのrootとGOPATH揃ったのはだいぶ良かった

**だいたいがHomebrewでなんとかなる**

あとは各アプリケーションの設定とかそういうことをやっていかないといけないね〜とか好きなフォントを入れて〜とかそういう系で、開発するのに必須なものはだいたいHomebrew経由で手に入れられる。あとから `$ brew list` で入れたものを確認もできるし良い。

macに入ってるものの話をするつもりがHomebrewやっぱ最高！みたいな記事になってしまった。

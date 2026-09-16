---
title: フロントエンドで最近試したもの
description: 今日のやったこと
date: 2019-03-19
---

いくつか試したものがあるのでそれの感想を書く。

### Chart.js

サクッとグラフをつくれるライブラリ。D3.jsほど複雑なことをしなくて良ければ全然事足りる感じ。ドキュメントを読めば分かるが、使いたいグラフに対してデータセットを設定するだけなので覚えることが本当に少なくてとても良い。

[**chartjs/Chart.js**  
\_Simple HTML5 Charts using the tag. Contribute to chartjs/Chart.js development by creating an account on GitHub.\_github.com](https://github.com/chartjs/Chart.js "https://github.com/chartjs/Chart.js")[](https://github.com/chartjs/Chart.js)

ちなみにReact向けのラッパーもあって普段はそれを使ってる。

[**jerairrest/react-chartjs-2**  
\_React wrapper for Chart.js. Contribute to jerairrest/react-chartjs-2 development by creating an account on GitHub.\_github.com](https://github.com/jerairrest/react-chartjs-2 "https://github.com/jerairrest/react-chartjs-2")[](https://github.com/jerairrest/react-chartjs-2)

中学時代から未だに数学への苦手意識が抜けてなくて本当にやばいなと思いながらも簡単にグラフを扱えるライブラリがあるのはとても嬉しい。

### Day.js

軽量でMoment.jsライクなDatetime系ライブラリ。最近はもっぱらdate-fnsだったので久々のMomentっぽいAPIに最初はぎこちなかったけど使ってると結構いいなって思えてきた。何よりサイズが全体で2KBなのでゴリゴリ使ってても気にならないのが有り難い。今後はこっち使っていこう〜って思えた。

[**iamkun/dayjs**  
\_⏰ Day.js 2KB immutable date library alternative to Moment.js with the same modern API - iamkun/dayjs_github.com](https://github.com/iamkun/dayjs "https://github.com/iamkun/dayjs")[](https://github.com/iamkun/dayjs)

### TypeScript

今更感がすごいけども。初めてではないがいざモノづくり、という場でがっつりやってみたのはここ最近でそれまではFlowだった。いざ使ってみると型による補完やチェックがめちゃくちゃ強力で「これだよこれ、型ってのはこうでなくちゃ」みたいな感じで良かった。もともとJavaから入ったし型システム自体が人間の手間を大幅に減らしてくれることにとても嬉しさを感じていたので体験としては最高なものを得られた。

今後はFlowをええ感じにTSしていきたいな、という野望が芽生えた。

[**Microsoft/TypeScript**  
\_TypeScript is a superset of JavaScript that compiles to clean JavaScript output. - Microsoft/TypeScript_github.com](https://github.com/Microsoft/TypeScript "https://github.com/Microsoft/TypeScript")[](https://github.com/Microsoft/TypeScript)

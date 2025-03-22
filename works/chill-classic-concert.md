---
title: CHILL CLASSIC CONCERT
description:
date: 2024-10-04
---

[CHILL CLASSIC CONCERT](https://www.chill-classic.jp)ポータルサイトのシステム構築およびウェブサイトの実装を担当しました。

[![CHILL CLASSIC CONCERT](/works/chill-classic-concert/cover.jpg)](https://www.chill-classic.jp)
<small style="display: block; text-align: right;">[&copy; indi inc.](https://indi.co.jp)</small>


## 技術スタック

- Next.js (App Router)
- TailwindCSS

## システム構成

- Cloudflare Pages
- Contentful

Next.jsのStatic Exportsを使用してCloudflare Pagesにデプロイしています。

Contentfulのデータが更新されるとDeploy Hookが呼ばれるようになっていて、Cloudflare上でデプロイ処理が自動実行されます。
<br />
ほぼリアルタイムで更新後データをサイトに反映、キャッシュ不要でContentful APIへのリクエスト回数を削減しています。

![Architecture diagram](/works/chill-classic-concert/architecture-diagram.png)

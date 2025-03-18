---
title: CHILL CLASSIC CONCERT
description:
date: 2024-10-04
---

ポータルサイトのシステム構築およびウェブサイトの実装を担当しました。

[![CHILL CLASSIC CONCERT](/works/chill-classic-concert/cover.jpg)](https://www.chill-classic.jp)


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

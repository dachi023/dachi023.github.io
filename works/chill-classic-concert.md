---
title: CHILL CLASSIC CONCERT
description:
date: 2024-10-04
---

[CHILL CLASSIC CONCERT](https://www.chill-classic.jp)ポータルサイトのシステム構築およびウェブサイトの実装を担当しました。

[![CHILL CLASSIC CONCERT](/works/chill-classic-concert/cover.jpg)](https://www.chill-classic.jp)
<small style="display: block; text-align: right;">[&copy; indi inc.](https://indi.co.jp)</small>


## 技術スタック

- Next.js (Pages Router)
- Tailwind CSS

## システム構成

- Cloudflare Pages
- Sanity
- GitHub Actions

Next.jsのStatic Exportsで生成したファイルを、GitHub ActionsからCloudflare Pagesにデプロイしています。

Sanityでコンテンツを公開するとwebhookでGitHub Actionsのワークフローが起動し、ビルドとデプロイが自動で実行されます。
<br />
スキーマの変更に伴うデータ移行がある場合は、移行を適用してからビルドするよう、ワークフローの中で順序を揃えています。

![Architecture diagram](/works/chill-classic-concert/architecture-diagram.png)
<small style="display: block; text-align: right;">Icons: [Cloudflare](https://github.com/cloudflare/cloudflare-docs) (CC BY 4.0), [Simple Icons](https://simpleicons.org) (CC0), [Lucide](https://lucide.dev) (ISC)</small>

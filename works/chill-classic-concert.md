---
title: CHILL CLASSIC CONCERT
description:
date: 2024-10-04
---

[CHILL CLASSIC CONCERT](https://www.chill-classic.jp)ポータルサイトのシステム構築およびウェブサイトの実装を担当しました。

複数のコンサートシリーズのページを1つのサイトで管理し、コンテンツはCMSから更新します。

[![CHILL CLASSIC CONCERT](/works/chill-classic-concert/cover.jpg)](https://www.chill-classic.jp)
<small style="display: block; text-align: right;">[&copy; indi inc.](https://indi.co.jp)</small>

## 技術スタック

- Web: Next.js 16 (Pages Router) + React 19
- UI: Tailwind CSS v3

## システム構成

- Cloudflare Pages
- Sanity
- GitHub Actions

Next.jsのStatic Exportsで生成したファイルを、GitHub ActionsからCloudflare Pagesにデプロイします。

Sanityでコンテンツを公開するとwebhookでワークフローが起動し、データ移行がある場合は適用してからビルドします。

![Architecture diagram](/works/chill-classic-concert/architecture-diagram.png)
<small style="display: block; text-align: right;">Icons: [Cloudflare](https://github.com/cloudflare/cloudflare-docs) (CC BY 4.0), [Simple Icons](https://simpleicons.org) (CC0), [Lucide](https://lucide.dev) (ISC)</small>

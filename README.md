# dachi.one

個人サイト [www.dachi.one](https://www.dachi.one) のソースコードです。

記事 (Posts) と制作物 (Works) を Markdown で管理しています。
Next.js の Static Exports で静的ファイルを生成し、GitHub Pages で配信しています。

## 技術スタック

- Next.js 16 (App Router / `output: "export"`)
- React 19
- TypeScript
- Tailwind CSS v4
- Bun (パッケージマネージャ / タスクランナー)
- unified (remark / rehype) による Markdown のレンダリング
- zod による frontmatter のバリデーション

## ローカルでの実行

```sh
bun install
bun run dev
```

http://localhost:3000 で開きます。

その他のコマンドは次のとおりです。

| コマンド            | 内容                             |
| ------------------- | -------------------------------- |
| `bun run build`     | 静的ファイルを `out/` に出力する |
| `bun run lint`      | ESLint を実行する                |
| `bun run typecheck` | 型チェックを実行する             |
| `bun run format`    | Prettier でフォーマットする      |

ビルド時に Google Fonts から OG 画像用のフォントを取得します。
オフラインではビルドが失敗します。

## 記事を書く

`posts/` に Markdown ファイルを追加します。

- ファイル名は `YYYY-MM-DD.md` とします。
- 同じ日に 2 本目を書く場合は `YYYY-MM-DD-2.md` のように連番を付けます。
- ファイル名 (拡張子を除く) がそのまま URL (`/posts/<slug>/`) になります。

frontmatter は次の 4 項目です。

```md
---
title: 記事のタイトル
description: 一覧や OG に出る短い説明 (空でも可)
date: 2025-03-04
category: life
---
```

`category` は `life` (生活) または `work` (仕事) のどちらかです。
いずれかが欠けていたり値が不正な場合はビルドが失敗します。

画像は `public/posts/<slug>/` に置き、`/posts/<slug>/01.png` のように参照します。

制作物は `works/` に同じ形式で追加します。`category` は不要です。
画像は `public/works/<slug>/` に置きます。

## デプロイ

`main` への push で GitHub Actions (`.github/workflows/deploy.yml`) が動き、
ビルド結果の `out/` を GitHub Pages に公開します。
手動で実行したい場合は Actions から workflow_dispatch を使います。

リポジトリの Settings > Pages で、Source を "GitHub Actions" に設定しておく必要があります。

独自ドメインは `public/CNAME` で指定しています。
Jekyll による処理を止めるため `public/.nojekyll` を置いています。

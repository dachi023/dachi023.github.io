# CLAUDE.md

このリポジトリで作業するときの決まりごとです。
サイトの概要とコマンドは [README.md](README.md) を参照してください。

## スタイル

- Tailwind の任意値 (`text-[19px]`、`tracking-[0.02em]`、`max-w-[720px]` など) を新しく書かないこと。
  標準のクラス (`text-lg`、`tracking-wide`、`max-w-2xl`) を使う。
  `gap-4.5` のように標準の間隔の刻みに乗る値は任意値ではないので使ってよい。
- 標準のクラスで表せない値が必要になった場合は、その場に任意値を書かず、
  `globals.css` の `@theme` にトークンを足して名前で参照する。
- Markdown から作った HTML のスタイル (`.prose`) はクラスを付けられないので `globals.css` に書く。
  文字サイズは `var(--text-lg)` のように Tailwind のトークンを参照し、px を直接書かない。
- 色は `@theme` のトークン (`paper` / `ink` / `soft` / `muted` / `faint` / `rule` / `accent` /
  `life` / `work` / `dot`) から取る。hex を直接書かない。
- 角丸はカードが `--radius`、ピルが `rounded-full`。
- ピルの高さはスマートフォンで 40px、`md` 以上で 36px。縦の padding ではなく高さで決める
  (本文の行間が 2 のため、padding だと高くなりすぎる)。

## ページと本文

- 記事は `posts/`、制作物は `works/` に Markdown で置く。frontmatter の項目と画像の置き場所は
  README のとおり。
- 本文には、リポジトリやコードから確かめられることだけを書く。確かめられない売り文句を足さない。
- 制作物の技術スタックは `Web: Next.js 16 (Pages Router) + React 19` のように、
  種類ごとにバージョン付きで並べる。ホスティングや CMS は「システム構成」に分ける。

## 画像

- OG 画像は `src/components/og-card.tsx` が satori で描く。satori は CSS の一部
  (`radial-gradient` など) を解釈しないので、既存の書き方に合わせる。
  フォントは Google Fonts から必要な字だけ取るため、オフラインではビルドが失敗する。
- 制作物の構成図は draw.io で描き、図のデータを埋め込んだ PNG (`-e`) で書き出す。
  Cloudflare のプロダクトアイコンは CC BY 4.0 なので、図の下にクレジットを置く。

## 確認

- `bun run lint`、`bun run typecheck`、`bun run build` を通す。
- 見た目を変えたときは、`out/` をローカルで配信してデスクトップ (1280px) と
  モバイル (390px) の幅で確認する。

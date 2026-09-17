---
title: Mekuri
description:
date: 2026-09-18
---

[Mekuri](https://mekuri.dev)は、みんなのスライドをまとめて、そのまま投映できるサービスです。

勉強会向けに、複数の発表者のPDFを1つのイベントに集約し、全端末でリアルタイムに同期して表示します。

[![Mekuri](/works/mekuri/cover.jpg)](https://mekuri.dev)

## 技術スタック

- API: Hono + Drizzle ORM
- Web: React 19 + Vite + TanStack Router + TanStack Query
- UI: Tailwind CSS v4 + shadcn/ui (Base UI)
- PDF: react-pdf

## システム構成

- Cloudflare Workers
- Cloudflare D1
- Cloudflare R2
- Cloudflare Durable Objects
- Terraform

同期はDurable ObjectsのWebSocketで行い、接続が切れた場合はポーリングにフォールバックします。

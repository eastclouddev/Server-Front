# Server-Front

## 概要

idemy-frontend  
required:

## Usage

環境変数の設定
`cp .env.example .env` を実行し、Firebase のクレデンシャルを [こちら]() から確認して設定をする。

ローカルサーバーの起動

```zsh
yarn install
yarn dev
```

## 構成など

機能を feature ごとにディレクトリ区切って実装していく。
feature の中身は機能ごとに区切り、中身は api, components が基本となる。

feature から横断的に使われるような機能は nuxt-app 配下の components などに書く。
`features/components` は Atomic Design で機能スコープで有効なコンポーネントを配置。

依存しているライブラリ(ex. axios, pinia, vuetify...)の設定、実装は plugins 配下に記述する。

`nuxt-app/components`は Atomic Design でグローバルに有効なコンポーネントを配置

## API 連携

API との連携は OpenAPI スキーマで行なっています。
スキーマファイルは Server-API をローカルで立ち上げると生成されます。
バックエンドのリポジトリでターミナルを 2 つ用意してそれぞれ `docker-compose up -d --build` を実行し、フロントのリポジトリで `yarn gen:openapi-type` を実行するとスキーマから TypeScript の API クライアント・型が自動生成されます。
aspida というツールによって実現されています。

## Deploy

Vercel で自動デプロイされます。
develop ブランチにマージされるとリリース用の `Release YYYY-mm-dd` という Pull Request が自動で作成されます。

feature/〇〇 ブランチから develop ブランチに Pull Request を作成 → PR ごとにプレビュー環境を自動デプロイ
develop ブランチにマージ → develop 環境に自動デプロイ
main ブランチにマージ → production 環境に自動デプロイ

## Server-Front の環境を単独で起動する方法

1. Server-Front へ移動する

```
cd Server-Front
```

2. Docker を build する

```
docker build -f environment/develop/Dockerfile . -t myapp
```

3. Docker を起動する

```
docker run -p 3000:3000 myapp
```

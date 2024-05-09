FROM node:lts

WORKDIR /app

# Yarnのインストール確認とインストール
RUN command -v yarn >/dev/null 2>&1 || npm install -g yarn

# パッケージファイルを先にコピー
COPY ./lmsc/nuxt-app/package.json ./lmsc/nuxt-app/yarn.lock ./

# 依存関係のインストール
RUN yarn install --force

# その他のファイルをコピー
COPY ./lmsc/nuxt-app/ .

CMD ["yarn", "dev"]

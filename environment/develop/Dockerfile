FROM node:lts

WORKDIR /app

RUN command -v yarn >/dev/null 2>&1 || npm install -g yarn

COPY ./lmsc/nuxt-app/package.json ./lmsc/nuxt-app/yarn.lock ./

RUN yarn install

COPY ./lmsc/nuxt-app/ .

CMD ["yarn", "dev"]

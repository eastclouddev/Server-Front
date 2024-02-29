FROM node:lts

WORKDIR /app

COPY ../../lmsc/nuxt-app/package*.json ./

RUN npm install

COPY ../../lmsc/nuxt-app/ /app

EXPOSE 3000

CMD ["npm", "start"]
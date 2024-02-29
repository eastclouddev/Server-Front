FROM node:lts

WORKDIR /app

COPY ../../lmsc/react-app/package*.json ./

RUN npm install

COPY ../../lmsc/react-app/ /app

EXPOSE 3000

CMD ["npm", "start"]
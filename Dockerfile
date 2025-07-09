FROM node:20-alpine

WORKDIR /app

COPY app/package.json app/yarn.lock ./

RUN npm install -G yarn

RUN yarn install

COPY app .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]

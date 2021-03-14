FROM node:14

ENV NODE_ENV production

WORKDIR /app


COPY package.json package-lock.json /app/

RUN npm i

COPY . .

CMD ["node", "index.js"]
FROM node:latest

WORKDIR /app

COPY package.json /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

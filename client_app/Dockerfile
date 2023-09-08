FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Команда для сборки приложения
RUN npm run build

CMD [ "npm", "run","dev" ]

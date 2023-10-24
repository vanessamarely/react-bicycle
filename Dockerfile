FROM node:18

WORKDIR /react-vite-app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent & npm cache clean --force

COPY . ./

CMD ["npm", "run", "dev"]

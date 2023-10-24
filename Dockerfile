FROM node:16

WORKDIR src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "dev", "--debug"]

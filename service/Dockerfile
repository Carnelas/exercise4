FROM node:latest
ADD . /app
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install nodemon -g
CMD ["node", "app.js"]

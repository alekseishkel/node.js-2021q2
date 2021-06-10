FROM node:14.17-alpine
WORKDIR /alekseishkel/node-js-docker
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
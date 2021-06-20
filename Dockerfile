FROM node:14.17-alpine
WORKDIR /alekseishkel/node-js-docker
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
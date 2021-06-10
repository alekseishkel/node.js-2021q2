FROM node:14.17-alpine
WORKDIR /alekseishkel/node-js-docker
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
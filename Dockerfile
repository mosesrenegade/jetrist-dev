FROM ubuntu:focal-20210416
COPY nginx /bin/nginx
CMD ["/bin/nginx"]

FROM node:8-jessie

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .


EXPOSE 3001
CMD ["node", "app.js"]

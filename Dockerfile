FROM node:8-jessie

FROM ubuntu:focal-20210416
COPY nginx /bin/nginx
CMD ["/bin/nginx"]
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
Run npm install --save netcat
COPY --chown=node:node . .


EXPOSE 8080
CMD ["node", "app.js", "httpd-foreground"]

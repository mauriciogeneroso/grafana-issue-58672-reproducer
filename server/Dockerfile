FROM node:18

COPY *.js ./
COPY *.json ./
 
RUN npm install

ENTRYPOINT [ "npm", "start" ]

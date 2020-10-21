FROM node:10-alpine as songbox
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /usr/src/app
COPY server/package*.json ./
ARG PORT=$PORT
ENV NODE_ENV=production
RUN npm install
COPY server/ .
EXPOSE ${PORT}
CMD [ "npm", "start" ]

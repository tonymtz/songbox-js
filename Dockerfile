FROM node:10-alpine as songbox
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /usr/src/app
COPY server/package*.json ./
ARG PORT=$PORT
ENV NODE_ENV=production
RUN npm install
COPY server/ .

# REACT APP
# WORKDIR /usr/src/app
RUN cd ./webapp && npm install --silent && npm run build
COPY ./webapp/build ./public/app
# END REACT APP

EXPOSE ${PORT}
CMD [ "npm", "start" ]

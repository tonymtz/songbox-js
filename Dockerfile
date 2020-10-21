FROM node:10-alpine as songbox
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /usr/src/app
COPY server/package*.json ./
ARG PORT=$PORT
ENV NODE_ENV=production
RUN npm install
COPY server/ .
COPY webapp ./webapp

# REACT APP
RUN cd public && mkdir app
RUN cd webapp && npm install --silent && PUBLIC_URL=https://songbox.io/app npm run build && mv build/* ../public/app
# END REACT APP

EXPOSE ${PORT}
CMD [ "npm", "start" ]

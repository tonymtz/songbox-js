FROM node:10-alpine as songbox-webapp-stage
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /app
COPY . .
RUN npm install || true
# RUN CI=true npm test
RUN npm run build

FROM nginx:alpine
COPY --from=songbox-webapp-stage /app/build /usr/share/nginx/html

FROM node:alpine as build
WORKDIR /
COPY package.json .
RUN npm i
COPY . .
ENV VITE_TRANSLATIONS_BASE_URL="https://translation-service-backend-8a3c5f3ef756.herokuapp.com"
RUN npm run build

FROM nginx
COPY --from=build /dist /usr/share/nginx/html
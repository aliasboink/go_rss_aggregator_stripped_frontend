FROM node:lts-alpine as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine AS production
COPY --from=build /app/build .
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
EXPOSE 3000
CMD ["node", "."]
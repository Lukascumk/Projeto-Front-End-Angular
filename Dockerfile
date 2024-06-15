# Etapa de construção
FROM node:16 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de execução
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/my-financeiro /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

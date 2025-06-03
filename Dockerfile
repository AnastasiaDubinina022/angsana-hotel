# Этап 1: сборка фронта
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап 2: nginx для продакшн-сервера
FROM nginx:alpine

# Копируем сборку во внутреннюю директорию nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Кастомный конфиг (если нужно настроить spa routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

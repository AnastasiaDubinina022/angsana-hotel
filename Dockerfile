# ---------- БИЛДЕР: Собираем фронтенд ----------
FROM node:18 as builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

# Принимаем переменную окружения при сборке
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Собираем production-сборку Vite
RUN npm run build


# ---------- ПРОДАКШН: Запускаем фронт + json-server ----------
FROM node:18

WORKDIR /app

# Устанавливаем serve и json-server глобально
RUN npm install -g serve json-server

# Копируем нужные файлы из builder
COPY --from=builder /app/dist ./dist
COPY db.json ./db.json

# Открываем порты
EXPOSE 5173
EXPOSE 3001

# Запускаем и фронт, и json-server параллельно
CMD sh -c "json-server --watch db.json --port 3001 & serve -s dist -l 5173"

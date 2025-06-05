# Используем официальный образ Node.js (лучше фиксировать версию)
FROM node:18

# Задаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Открываем порты:
# - 5173 для Vite
# - 3001 для json-server
EXPOSE 5173
EXPOSE 3001

# Запускаем dev-сервер и json-server параллельно
CMD ["npm", "run", "dev"]

# # Открываем порт, на котором работает Vite по умолчанию
# EXPOSE 5173

# # Запускаем Vite dev-сервер и разрешаем внешние подключения
# CMD ["npm", "run", "dev", "--", "--host"]
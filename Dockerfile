# Используем Node.js образ
FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копируем файлы
COPY package*.json ./
RUN npm install

# Копируем оставшиеся файлы
COPY . .

# Компилируем TypeScript
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запуск приложения
CMD ["node", "dist/server.js"]

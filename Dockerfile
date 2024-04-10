FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci   
COPY . .
EXPOSE 7070
CMD ["npm","start"]
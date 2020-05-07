FROM node:latest
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 80
# ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "server.js"]

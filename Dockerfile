FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8082

ENV ADMIN_GRPC_PORT=8082

ENV MONGO_URI="mongodb+srv://asifasifpsps:o8abwTjlHg2qGM7y@cluster3.to6nkgq.mongodb.net/AdminService?retryWrites=true&w=majority&appName=Cluster3"

ENV JWT_SECRET=GeniusGrid123



CMD [ "npm", "start" ]
FROM node:20-alpine as base

WORKDIR /app

COPY package*.json .

RUN npm install

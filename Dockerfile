FROM node:14-slim

WORKDIR /cons-app/ui

COPY ./ui .

RUN yarn
FROM node:15-alpine

WORKDIR /cons-app/ui

COPY ./ui .

RUN yarn
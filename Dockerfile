FROM node:7.4.0-alpine

RUN npm install --global yarn

ENV HOME=/home/app

RUN mkdir $HOME

WORKDIR $HOME/book-viewer

COPY package.json yarn.lock $HOME/book-viewer/

RUN yarn install

COPY . $HOME/book-viewer/

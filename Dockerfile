FROM node:latest

# variables

RUN apt-get update

# Create api directory
RUN mkdir /api

# define as a workspace
WORKDIR /api

# setup to installation
ADD . /api/

RUN rm -rf node_modules

RUN rm -rf package-lock.json

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
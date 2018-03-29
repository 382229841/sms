FROM node:8.10

# Build app
RUN mkdir -p /src/nodejssms
WORKDIR /src/nodejssms
COPY . /src/nodejssms

RUN npm install

EXPOSE 3000

CMD [ "npm","start"]
FROM node:12.16.3-alpine3.11

RUN mkdir /var/local/comesou

COPY . /var/local/comesou

WORKDIR /var/local/comesou

RUN npm install

EXPOSE 5001

CMD ["npm", "run", "start"]
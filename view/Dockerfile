FROM node:12.16.3-alpine3.11

RUN mkdir /var/local/comesou
RUN npm i -g serve

COPY ./build/ /var/local/comesou

EXPOSE 5000

CMD ["serve", "-s", "/var/local/comesou"]
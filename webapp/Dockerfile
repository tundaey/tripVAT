FROM nginx:1.13.8-alpine

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/no-cache.conf /etc/nginx/conf.d/no-cache.conf
COPY docker/nginx/security.conf /etc/nginx/conf.d/security.conf
COPY docker/nginx/mime.types /etc/nginx/mime.types

COPY build /var/www/loan-engine.webapp.lendinvest.com/build

RUN apk add --no-cache bash curl

RUN addgroup www-data \
 && adduser -S -u 1000 www-data \
 && chown -R www-data:www-data /var/www/loan-engine.webapp.lendinvest.com

WORKDIR /var/www/loan-engine.webapp.lendinvest.com
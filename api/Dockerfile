FROM node:12-alpine
# RUN apk add g++ make python
COPY . /opt/app

WORKDIR /opt/app

# RUN npm install
RUN apk --no-cache --virtual build-dependencies add make python g++ && npm install && apk del build-dependencies

CMD npm run dev
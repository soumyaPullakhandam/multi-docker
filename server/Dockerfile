FROM node:alpine
WORKDIR '/app'

COPY ./package.json ./
RUN npm install

COPY . .
# command mentioned in package.json
CMD ["npm", "run", "start"]
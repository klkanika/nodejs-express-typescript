FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/move-api

# Bundle app source
COPY . .

RUN npm install

CMD [ "npm","run", "start" ]

# ENTRYPOINT ["tail"]
# CMD ["-f","/dev/null"]
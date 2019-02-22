FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/turbowash
WORKDIR /usr/src/turbowash

# Install app dependencies
COPY package.json /usr/src/turbowash
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . /usr/src/turbowash

EXPOSE 8080

CMD [ "npm", "start" ]

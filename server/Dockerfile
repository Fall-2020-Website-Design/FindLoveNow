# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /app/server/
 
ENV PATH /app/server/node_modules/.bin:$PATH
 
# Copies package.json and package-lock.json to Docker environment
COPY package*.json /app/server/
 
# Installs all node packages
RUN npm install --silent
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 5000
 
# Finally runs the application
CMD [ "npm", "run", "server" ]
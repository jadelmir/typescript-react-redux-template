FROM node:14.4.0
RUN mkdir /app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
COPY . . 

EXPOSE 3000 
CMD ["npm","start"]


FROM node:13.12.0-alpine

#setting up working directory
WORKDIR /TEXT-ANALYZER

#add " /node_modules/.bin" to $PATH
ENV PATH="./node_modules/.bin:$PATH"

#Copying all the folders to WORKING DIR
COPY . .

#Building npm application
RUN npm run build

#start app
CMD ["npm", "start"]
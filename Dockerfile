# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy frontend assets (HTML, CSS, JS) from the 'public' directory
COPY public /usr/src/app/public

# Copy EJS templates from the 'views' directory
COPY views /usr/src/app/views

# Copy your main application file (app.js)
COPY app.js /usr/src/app/app.js

# Expose the port your app will listen on
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]

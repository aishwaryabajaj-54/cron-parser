# Cron Expression Parser

## PRE-REQUISITES

For development, you will only need Node.js and a node global package

### Node installation

Just go on official Node.js website (https://nodejs.org/) and download the installer.

### Node Package installation

Run the following command in your project directory:

Open terminal and type - 
npm install


### To start application you can either choose option a or b-
a) Run directly with command line - 
    node src/auto-run.js "*/15 0 1,15 * 1-5 /usr/bin/find"

b) Run node application and test with an API
    - Go to command line and run 
        node src\index.js
    - Use API in postman or any api tool -
        Method - POST
        URL - http://localhost:3000/cron
        Body - { "expression": "30 15 * * *  /usr/bin/find" }

You can change input strings and test in terminal you'll see a table of output and with rest api you'll see a json response
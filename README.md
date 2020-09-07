# INSTALLATION GUIDE 
  
## INSTALLATION

### SYSTEM
1.1 Install Nodejs NPM
`sudo apt-get install nodejs npm`
 
### PROJECT
2.1 In the olr_api directory
`npm install`

2.2 Copy env config file
`cp env-default .env`

2.3 Edit config file if you don't want to use the default port
`PORT=<your_custom_port>`

2.5 Run olr_api
`npm run start`

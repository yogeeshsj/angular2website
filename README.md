# Angular 2 Portfolio website

Live Demo [click here](https://iamyogeesh.herokuapp.com/)

## How I have developed this website




npm install

npm install -g angular-cli

ng angular2website

ng serve

#Creating the components

ng g c Menu -is --spec false --flat: 
ng g c Aboutme -is --spec false --flat: 
ng g c Apps -is --spec false --flat: 
ng g c Blog -is --spec false --flat: 
ng g c Resume -is --spec false --flat: 


## Push to Heroku to Deploy the App

Register to [Heroku](https://www.heroku.com/) and login.

Create new app and Link your app from Git.

OR


##Angular CLI Deployment: Host Your Angular 2 App on Heroku

`heroku create`


// package.json
`"scripts": {
  // ...
  "postinstall": "ng build --aot -prod"
},`



// package.json
`"dependencies": {
  // ...
  "@angular/cli": "1.2.3",
},`

// package.json
`"scripts": {
  // ...
  "start": "node server.js"
},`

// package.json
`"engines": {
  "node": "6.11.1",
  "npm": "3.10.9"
}`


Create an Express Server

npm install --save express


`// server.js
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
// ...
// server.js
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});`


--------------------------------------------
Install the Heroku CLI

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository

Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a iamyogeeshhere
Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository

For existing repositories, simply add the heroku remote

$ heroku git:remote -a iamyogeeshhere

-------------------------------------------------------------

heroku
heroku login
heroku create app-name
gie add -A
git commit -m "comment"
git push heroku master
heroku ps:scale web=1
heroku open


`ng e2e`
`ng e2e`
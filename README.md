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
Include the code in above repo

Create an Express Server
npm install --save express

// server.js
Include the code in above repo

--------------------------------------------
Install the Heroku CLI

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login

Create a new Git repository

Initialize a git repository in a new or existing directory

$ cd my-project/

$ git init

$ heroku git:remote -a iamyogeesh

Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .

$ git commit -am "make it better"

$ git push heroku master

Existing Git repository

For existing repositories, simply add the heroku remote

$ heroku git:remote -a iamyogeesh

-------------------------------------------------------------

heroku

heroku login

heroku create app-name

gie add -A

git commit -m "comment"

git push heroku master

heroku ps:scale web=1

heroku open

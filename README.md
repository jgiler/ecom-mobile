# Ecommerce Refactored
[Preface]
* This project is a refactored version of my previous ecommerce app. [Click here to check it out!](https://github.com/jgiler/ecom-phase-3-4)

[General Info]
* This version of the project still contains filters and easy navigation. The website was made using the Mongo Database on Atlas, Node JS, and React JS. The purpose of this project was to create a secured Administrator page using SHA256.  The app includes Login and Signup, demonstrating access to protected admin page and protected route. At the moment, anyone can sign up to be an admin, they can view the products. The point is to make sure not anyone can log in and they must sign up first to view admin page as well as not being able to view others passwords in the database(passwords get encryption with bcrypt). Auth process must use bcrypt encryption protocol and JWT.

## Technologies used
Project is created with:
* Mongo, NODE JS, REACT
* npm version: 6.11.3
* node version: 12.5.0
* MongoDB Atlas
* Bcrypt Encryption Protocol
* JWT
* Heroku

## LAUNCH 
To run this project, install it locally (by cloning it) using npm. Configure your .env file. Then follow the commands below: 
```
$ cd ecom-refactor
$ npm install
$ npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)





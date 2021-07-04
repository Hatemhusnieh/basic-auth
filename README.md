# basic-auth

### Author : Hatem Husnieh  

## install  
1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

## Deploy, Run and Test
- [test report](https://github.com/Hatemhusnieh/basic-auth/actions)
- [deployed link](https://hatem-basic-auth.herokuapp.com/)
- [Pull Request](https://github.com/Hatemhusnieh/basic-auth/pull/1)

### Setup  
#### `.env` requirement
  - `PORT` - port number  
  - `MONGODB_URL` - port number

#### Running the app  
- either:
  1. `npm start`
  1. `nodemon`
- connect to mongodb database
- through `postman` or `thunder client`
- Sign Up: `http://localhost:3001/signup`
  - send an `json` object as follow:  

    ![signup](./img/signup.png)  

  - returns user Object as saved in DB  

    ![Object](img/res1.png)  
- Sign In: `http://localhost:3001/signin`
  - send in headers username and password as follow :  
    ![signin](img/signin.png)  

  - returns Object  

    ![Object](img/res2.png)  

#### Test 
- Unit test: `npm run test`
- Lint test: `npm run lint`

### UML:  
![uml](img/labs.jpg)
// import express, { json } from 'express';
const express = require ('express');
const bodyPaser = require ('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1', // SAME AS LOCALHOST
      port : 3306,
      user :'Precious',  //'your_database_user',
      password : 'test' , //'your_database_password',
      database :'Smart-brain' // 'myapp_test'
    }
  });

  // db.select ('*').from('users').then(data =>{
  //     console.log (data);
  // });

const app = express () ;
// app.use(bodyPaser.json( ));
// app.use (cors( ));
//USED TO CONNECT FRONT AND BACK END --> cors
// login : [
//     {
//         id: '987',
//         hash : ' ',
//         email : 'john@gmail.com'
//     }
// ]
app.use(cors())
app.use(json());

app.get( ' / ', ( req , res )=> {res.send (database.users) })
app.post ('/signin',  handlesignin(db, bcrypt))
app.post ('./register',(req, res) =>{ handleRegister (req, res, db, bcrypt)})
app.get  ('./profile/:id', (req, res) => {handleprofileGet (req,res,db,bcrypt)})
app.put ('./image', (req,res) => {handleimage(req,res,db)})
app.post ('./imageurl', (req,res) => {handleApiCall (req,res)})
app.listen ( 3000, ( )=> {
    console.log ('app is runnning on port 3000');
})
/*
/ --> res = this is working
/ signin --> POST =success/fail
/resigter --> POST = user
/profile/:userID --> GET = user
/image --> PUT (update) user
*/
// const datebase = {
//     user : [
//         {
//             id: '123',
//             name:'john',
//             email:'john@gmail.com',
//             password: `apples`,
//             entries: 0,
//             joined: new Data ( )
//             },
//             {
//                 id: '124',
//                 name:'sally',
//                 email:'sally@gmail.com',
//                 password: `bananas`,
//                 entries: 0,
//                 joined: new Data ( )
//                 }
//     ]
// }
/*
  bcrypt.hash(password, null, null, function( err, hash ) {
        console.log(hash);
    });
      bcrypt.compare("apples", null, null, function( err, hash ) {
        console.log('first guess', res);
      });
      bcrypt.compare("veggies", null, null, function( err, hash ) {
        console.log('secound guess', res);
    });
 PROTECTS PASSWORDS SO MIDDLE MAN CAN'T GET IT 
 USE HTTP IN THE POST METHOD  WITHIN THE BODY
*/
//$ npm install bcrypt
/*
* You can copy and run the code below to play around with bcrypt
* However this is for demonstration purposes only. Use these concepts
* to adapt to your own project needs.
*/

// import bcrypt from'bcrypt'
// const saltRounds = 10 // increase this if you want more iterations  
// const userPassword = 'supersecretpassword'  
// const randomPassword = 'fakepassword'
 
// const storeUserPassword = (password, salt) =>  
//   bcrypt.hash(password, salt).then(storeHashInDatabase)
 
// const storeHashInDatabase = (hash) => {  
//    // Store the hash in your password DB
//    return hash // For now we are returning the hash for testing at the bottom
// }
 
// // Returns true if user password is correct, returns false otherwise
// const checkUserPassword = (enteredPassword, storedPasswordHash) =>  
//   bcrypt.compare(enteredPassword, storedPasswordHash)
 
 
// // This is for demonstration purposes only.
// storeUserPassword(userPassword, saltRounds)  
//   .then(hash =>
//     // change param userPassword to randomPassword to get false
//     checkUserPassword(userPassword, hash)
//   )
//   .then(console.log)
//   .catch(console.error)

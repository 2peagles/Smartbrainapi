const express = require( 'express' );
// const bodyParser = require ('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require ('./controlers/register');
const signin = require('./controlers/signin');
const profile = require('./controlers/profile');
const image = require('./controlers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1', // SAME as  LOCALHOST
      user :'Precious',  //'your_database_user',
      password : 'Precious' , //'your_database_password',
      database :'Smart-brain' // 'myapp_test'
    }
  });

const app = express();

app.use(cors())
app.use(express.json( ));

// app.get('/', (req,res) => {res.send('this is working')})
// app.get( '/',(req, res)=> { res.send(db.users) })
app.post('/signin',  signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => { profile.handleProfileGet (req,res,db )})
app.put('/image', (req,res) => { image.handleImage(req,res,db)})
app.post('/imageurl', (req,res) => { image.handleApiCall (req,res)})
app.listen(3000, ( )=> {
    console.log ('app is runnning on port 3000');
})
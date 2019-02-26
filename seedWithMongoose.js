require('dotenv').config()

process.env.NODE_ENV = 'production'

var mongoose = require('mongoose');
var config = require('./conf/config');
var User = require('./app/models/user');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

const user = new User({
  firstName: 'Kate',
  lastName: 'Rose', 
  username: 'admin',
  oauthID: '1',
  email: 'example@example.com',
  admin: true,
  image: ''
});
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const mongoUri = `mongodb://${config.dbUser}:${config.dbPassword}@${config.db}-shard-00-00-5sypa.mongodb.net:27017,${config.db}-shard-00-01-5sypa.mongodb.net:27017,${config.db}-shard-00-02-5sypa.mongodb.net:27017/${config.db}-development?ssl=true&replicaSet=helloGov-shard-0&authSource=admin&retryWrites=true`;
// console.log(mongoUri)

mongoose.connect(mongoUri, {useNewUrlParser: true});
user.setPassword(process.env.DB_ADMIN_PASSWORD, function(err, model, passwordErr) {
  if (err || passwordErr) {
    console.err(err, "There was an error!");
  } else {
    model.save()
        .then(function() {
            if (reset) {
              reset.remove();
            }
        });
  }
});


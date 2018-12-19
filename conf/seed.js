const User = require('../app/models/user')
mongoose.connect('mongodb://localhost:27017/hellogov');
const newUser = new User({
  "firstName": "Simon",
  "lastName": "Belmont",
  "username": "admin",
  "email": "simon@bellmont.com",
  "bio": "vampires beware",
  "admin": true
})

newUser.save(function (err) {
  if (err) throw(new Error('Invalid User document.'));
  console.log('User created!');
});


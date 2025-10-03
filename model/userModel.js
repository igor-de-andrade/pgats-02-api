const bcrypt = require('bcryptjs');

// In-memory user database
const users = [
  {
    username: 'douglas', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'luiz' ], 
    saldo: 10000
  },
  {
    username: 'michelle', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'hideki' ], 
    saldo: 10000
  }
];

module.exports = {
  users
};

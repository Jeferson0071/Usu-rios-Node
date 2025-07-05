//const {Person} = require('./person');
const dotenv = require ("dotenv");
const connectToDatabase = require('./src/database/conect');
dotenv.config();

//require('./modules/http');
require('./modules/express');

connectToDatabase();



//const person = new Person('John Doe');


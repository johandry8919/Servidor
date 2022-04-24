const express = require('express');
const mysql = require('mysql')
const myCom = require('express-myconnection')
const app = express();
const router = require('./router')

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'usuario'
}


app.use(myCom(mysql , dbConfig, 'single'))
app.use(express.json())

 app.use('/' ,router)




 app.listen(8000, () => {
   console.log('Server is running on port 3000');
 });


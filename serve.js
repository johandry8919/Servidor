const express = require('express');
const mysql = require('mysql')
const myCom = require('express-myconnection')
const app = express();
const router = require('./router')
const cors = require ('cors')


const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'usuario'
}


app.use(myCom(mysql , dbConfig, 'single'))
app.use(express.json())
app.use(cors())

 app.use('/api' ,router)
 app.use('/home' ,router)




 app.set('port', process.env.PORT || 9000)
  app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  })

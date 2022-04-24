const express = require('express')
const router = express.Router()


//routes
router.get('/api', (req, res) => {
    req.getConnection((erro, connt)=>{
        if(erro){
            res.status(500).send('Erro na conexão com o banco de dados')
        }else{
            connt.query('SELECT * FROM list_user', (erro, resultado)=>{
                if(erro){
                    res.status(500).send('Error al ejecutar la consulta')
                }else{
                    res.status(200).json(resultado)
                }
            })
        }


    })
  });

  router.get('/home', (req, res) => {
    req.getConnection((erro, connt)=>{
        if(erro){
            res.status(500).send('Erro na conexão com o banco de dados')
        }else{
          res.status(200).send('Bienvenido a la pagina de inicio')
        }


    })
  });

  router.post('/api', (req, res) => {
    req.getConnection((erro, connt)=>{
        if(erro) console.log(erro)

        connt.query('INSERT INTO list_user set ?' ,[req.body], (erro, resultado)=>{
            if(erro){
                res.status(500).send('Error al ejecutar la consulta')
            }else{
                res.status(200).json(resultado)
            }
        })

        
  })
    });


module.exports  = router




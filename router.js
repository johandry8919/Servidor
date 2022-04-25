const express = require('express')
const router = express.Router()


//routes



router.get('/', (req, res) => {
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



  router.post('/', (req, res) => {
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

    router.delete('/:id', (req, res) => {
        req.getConnection((erro, connt)=>{
            if(erro) return console.log("erro en la conecion ")

            connt.query('DELETE FROM list_user WHERE id_user = ?' ,[req.params.id], (erro, resultado)=>{
                if(erro){
                    res.status(500).send('Error al ejecutar la consulta')
                }else{
                    res.status(200).json("resultado")
                }
            })
    
    
            
      })
        });

        router.put('/:id', (req, res) => {
            req.getConnection((erro, connt)=>{
                if(erro) return console.log("erro en la conecion ")

                connt.query('UPDATE list_user SET ? WHERE id_user = ?' ,[req.body, req.body.id], (erro, resultado)=>{
                    if(erro){
                        res.status(500).send('Error al ejecutar la consulta')
                    }else{
                        res.status(200).json("actualisado")
                    }
                })
        
        
                
        
        
                
          })
            });
    


module.exports  = router




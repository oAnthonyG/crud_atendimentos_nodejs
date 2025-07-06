import express from 'express';
const app = express();
import router from './routers/index.js';
import conexao from './infraestrutura/conexao.js';
import Tabelas from './infraestrutura/tabela.js';



router(app, express);
Tabelas.init(conexao);



app.listen(3000, (error) =>{
  if(error){
    console.log('Error starting server:', error);
    return;
  }
  console.log('Server is running on port 3000');
});


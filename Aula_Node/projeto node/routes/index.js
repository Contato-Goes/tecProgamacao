// Rotas (quando o servidor for acessado, pra onde ele vai?)
const express = require('express');

const router = express.Router();
router.get('/',(req, res)=>{
    res.send('Hello world')
});

router.get('/contato',(req, res)=>{
    res.send('Pagina com informação de contato')
});

router.get('/cadastro',(req, res)=>{
    res.send('Pagina de cadastro da aplicação')
});

module.exports = router;
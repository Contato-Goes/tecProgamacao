const app = require('./app')

require('dotenv').config({path:'var.env'})

app.set('port',process.env.PORT || 7777); //escolhendo a porta que a aplicação vai rodar
const server = app.listen(app.get('port'), ()=>{
    console.log('Servidor online na porta: ' + server.address().port)
})
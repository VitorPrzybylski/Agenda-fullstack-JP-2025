import express from 'express'
import cors from 'cors'
import database from './config/database.js'
import routerCliente from './router/clientes.js'
import routerAtendimento from './router/atendimento.js'
const app = express();

app.use(express.json())
app.use(cors())


app.use('/api/v1',routerCliente)
app.use('/api/v1',routerAtendimento)
const port = 3000
database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando na porta" + port)
        })
    })
    .catch((e) => {
        console.log("nao conectou com o banco" + e)
    })
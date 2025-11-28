import express from 'express'
import ControllerCliente from "../controller/clientes.js"

const routerCliente = express.Router()

// LOGIN
routerCliente.post('/login', ControllerCliente.Login)

// CRUD SEM PERMISSÃO
routerCliente.get('/clientes', ControllerCliente.FindAll)
routerCliente.get('/cliente/:id', ControllerCliente.FindOne)
routerCliente.post('/cliente/create', ControllerCliente.Create)
routerCliente.put('/cliente/:id', ControllerCliente.Update)
routerCliente.delete('/cliente/:id', ControllerCliente.Delete)

export default routerCliente

import express from 'express'
import ControllerCliente from "../controller/clientes.js"


const routerCliente = express.Router()
routerCliente.post('/login', ControllerCliente.Login)
routerCliente.get('/clientes', ControllerCliente.FindAll)
routerCliente.post('/cliente/create', ControllerCliente.Create)
routerCliente.get('/cliente/:id', ControllerCliente.FindOne)
routerCliente.delete('/cliente/:id', ControllerCliente.Delete)
routerCliente.put('/cliente/:id', ControllerCliente.Update)
export default routerCliente
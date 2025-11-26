import express from 'express'
import ControllerClientes from "../controller/clientes.js"

const routerCliente = express.Router()
routerCliente.get('/clientes', ControllerClientes.FindAll)
routerCliente.post('/cliente/create', ControllerClientes.Create)
routerCliente.get('/cliente/:id', ControllerClientes.FindOne)
routerCliente.delete('/cliente/:id', ControllerClientes.Delete)
routerCliente.put('/cliente/:id', ControllerClientes.Update)
export default routerCliente
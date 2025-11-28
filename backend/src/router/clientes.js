import express from 'express'
import ControllerCliente from "../controller/clientes.js"
import authMiddleware from "../middleware/auth.js"

const routerCliente = express.Router()

routerCliente.post('/login', ControllerCliente.Login)


routerCliente.get('/cliente/context',authMiddleware(), ControllerCliente.FindOne)
routerCliente.post('/cliente/create', ControllerCliente.Create)
routerCliente.put('/cliente/',authMiddleware(), ControllerCliente.Update)
routerCliente.delete('/cliente/',authMiddleware(), ControllerCliente.Delete)

routerCliente.get('/clientes',authMiddleware([0]), ControllerCliente.FindAll)
routerCliente.get('/cliente/:id',authMiddleware([0]), ControllerCliente.FindOne)
routerCliente.post('/cliente/admin',authMiddleware([0]), ControllerCliente.Create)
routerCliente.put('/cliente/:id',authMiddleware([0]), ControllerCliente.Update)
routerCliente.delete('/cliente/:id',authMiddleware([0]), ControllerCliente.Delete)
export default routerCliente
import express from 'express'
import ControllerAtendimento from "../controller/atendimento.js"

const routerAtendimento = express.Router()
routerAtendimento.get('/atendimento', ControllerAtendimento.FindAll)
routerAtendimento.post('/atendimento/create', ControllerAtendimento.Create)
routerAtendimento.get('/atendimento/:id', ControllerAtendimento.FindOne)
routerAtendimento.delete('/atendimento/:id', ControllerAtendimento.Delete)
routerAtendimento.put('/atendimento/:id', ControllerAtendimento.Update)
export default routerAtendimento
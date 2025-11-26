import ServiceAtendimento from "../service/atendimento.js"

class ControllerAtendimento {
    async FindAll(_, res) {
        try {
            const atendimento = await ServiceAtendimento.FindAll()
            res.send({ atendimento })
        } catch (error) {
            res.send({ error: error.menssage })
        }
    }
    async Create(req, res) {
        try {
            const { dia,hora,valor,concluido } = req.body
            await ServiceAtendimento.Create(dia,hora,valor,concluido)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const atendimento = await ServiceAtendimento.FindOne(id)
            res.send({ atendimento })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceAtendimento.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Update(req, res) {
        try {
            // const id = req.params.id 
            // const id = req.body.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido

            ServiceAtendimento.Update(dia,hora,valor,concluido)
            res.send({msg:"update feito com sucesso"})
        } catch (error) {
            res.send({ error: error.message })
        }
    }
} export default new ControllerAtendimento()
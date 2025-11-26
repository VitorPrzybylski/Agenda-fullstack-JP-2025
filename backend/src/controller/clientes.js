import ServiceClientes from "../service/clientes.js"

class ControllerClientes {
    async FindAll(_, res) {
        try {
            const clientes = await ServiceClientes.FindAll()
            res.send({ clientes })
        } catch (error) {
            res.send({ error: error.menssage })
        }
    }
    async Create(req, res) {
        try {
            const { nome, email, senha } = req.body
            await ServiceClientes.Create(nome, email, senha)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceClientes.FindOne(id)
            res.send({ cliente })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceClientes.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Update(req, res) {
        try {
            // const id = req.params.id 
            const id = req.body.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha

            ServiceClientes.Update(id, nome,email,senha)
            res.send({msg:"update feito com sucesso"})
        } catch (error) {
            res.send({ error: error.message })
        }
    }
    async Login(_, res) {
        try {
            const clientes = await ServiceClientes.FindAll()
            res.send({ clientes })
        } catch (error) {
            res.send({ error: error.menssage })
        }
    }
} export default new ControllerClientes()
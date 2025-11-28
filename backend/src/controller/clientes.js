import ServiceCliente from "../service/clientes.js"

class ControllerCliente {
    async FindAll(_, res) {
        try {
            const clientes = await ServiceCliente.FindAll()
            res.send({ clientes })
        } catch (error) {
            res.send({ error: error.menssage })
        }
    }
    // async Create(req, res) {
    //     try {
    //         const { nome, email, senha,ativo } = req.body
    //         await ServiceCliente.Create(nome, email, senha,ativo)
    //         res.status(201).send()
    //     } catch (error) {
    //         res.status(500).send({ error: error.message })
    //     }
    // }
    async Create(req, res) {
        try {
            const loggedCliente = req.headers?.cliente
            let permissao = 1
            if(loggedCliente && loggedCliente.permissao === 0){
                permissao = req.body.permissao
            }
            const { nome, email, senha, ativo } = req.body
            await ServiceCliente.Create(nome, email, senha, ativo, permissao)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.cliente?.id
            const cliente = await ServiceCliente.FindOne(id)
            res.send({ cliente })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.cliente?.id
            await ServiceCliente.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Update(req, res) {
        try {
            // const id = req.params.id || req.headers?.cliente?.id 
            const id = req.body.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha

            ServiceCliente.Update(id, nome, email, senha)
            res.send({ msg: "update feito com sucesso" })
        } catch (error) {
            res.send({ error: error.message })
        }
    }
    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await ServiceCliente.Login(email, senha)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
} export default new ControllerCliente()
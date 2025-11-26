import Clientes from "../model/clientes.js";
class ServiceClientes {
    async FindOne(id) {
        if (!id) {
            throw new Error("falta o ID")
        }
        const cliente = await Clientes.findByPk(id)

        if (!cliente) {
            throw new Error("cliente nao encontrado")
        }
        return cliente
    }
    async FindAll() {
        return Clientes.findAll()
    }
    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("preencher todos os campos")
        }
        await Clientes.create({
            nome,
            email,
            senha
        })
    }
    
    async Update(id, nome, senha,email) {
        const clientes = await Clientes.findByPk(id)
        // oldUser.nome = nome || oldUser.nome

        Clientes.update(id, nome,senha,email)
    }

    async Delete(id) {
        const cliente = await Clientes.findByPk(id)

        cliente.destroy()
    }

}
export default new ServiceClientes()
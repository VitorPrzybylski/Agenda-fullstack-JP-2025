import Atendimento from "../model/atendimento.js";
class ServiceAtendimento {
    async FindOne(id) {
        if (!id) {
            throw new Error("falta o ID")
        }
        const atendimento = await Atendimentos.findByPk(id)

        if (!atendimento) {
            throw new Error("Atendimento nao encontrado")
        }
        return atendimento
    }
    async FindAll() {
        return Atendimentos.findAll()
    }
    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("preencher todos os campos")
        }
        await Atendimentos.create({
            nome,
            email,
            senha
        })
    }
    
    async Update(id, nome, senha,email) {
        const atendimentos = await Atendimentos.findByPk(id)
        // oldUser.nome = nome || oldUser.nome

        atendimentos.update(id, nome,senha,email)
    }

    async Delete(id) {
        const atendimento = await Atendimentos.findByPk(id)

        atendimento.destroy()
    }

}
export default new ServiceAtendimento()
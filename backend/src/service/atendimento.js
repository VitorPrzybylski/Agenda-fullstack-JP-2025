import Atendimento from "../model/atendimento.js";
class ServiceAtendimento {
    async FindOne(id) {
        if (!id) {
            throw new Error("falta o ID")
        }
        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error("Atendimento nao encontrado")
        }
        return atendimento
    }
    async FindAll() {
        return Atendimento.findAll()
    }
    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("preencher todos os campos")
        }
        await Atendimento.create({
            nome,
            email,
            senha
        })
    }

    async Update(id, dia, hora, valor, concluido) {
        await Atendimento.update(
            { dia, hora, valor, concluido },   // campos
            { where: { id } }                  // condição
        )
    }

    async Delete(id) {
        const atendimento = await Atendimento.findByPk(id)

        atendimento.destroy()
    }

}
export default new ServiceAtendimento()
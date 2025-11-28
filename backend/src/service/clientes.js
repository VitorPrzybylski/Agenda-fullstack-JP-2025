import Cliente from '../model/clientes.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import atendimento from '../model/atendimento.js'
const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 // 12
class ServiceCliente {

    async FindOne(id) {
        if (!id) throw new Error("falta o ID")

        const cliente = await Cliente.findByPk(id,{
            include:[{
                model:atendimento
            }]
        })
        if (!cliente) throw new Error("cliente nao encontrado")

        return cliente
    }

    async FindAll() {
        return Cliente.findAll()
    }

    // async Create({ nome, email, senha, ativo }) {
    //     if (!nome || !email || !senha|| !ativo) {
    //         throw new Error("preencher tosdos os campos")
    //     }

    //     await Cliente.create({ nome, email, senha, ativo })
    // }
    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }
        const senhaCrip = await bcrypt.hash(String(senha), SALT)


        await Cliente.create({
            nome,
            email,
            senha: senhaCrip,
            ativo,
            permissao

        })
    }
    async Update(id, nome, email,senha) {

        if (!id) throw new Error("ID obrigatório")
        const cliente = await Cliente.findByPk(id)
        if (!cliente) throw new Error("Cliente não encontrado")

        await Cliente.update(
            { nome, senha, email },
            { where: { id } }
        )
    }

    async Delete(id) {
        const cliente = await Cliente.findByPk(id)
        if (!cliente) throw new Error("Cliente não encontrado")

        await cliente.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const cliente = await Cliente.findOne({ where: { email } })

        if (
            !cliente
            || !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            { id: cliente.id, nome: cliente.nome, permissao: cliente.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente();
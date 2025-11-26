import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './styles.css'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    ativo: true
}

export default function CreateClientes() {
    const navigate = useNavigate()
    const [clientes, setclientes] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setclientes({
            ...clientes,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setclientes(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await createClientes(clientes)

        if (response.status === 201) {
            toast("Usuário criado com sucesso")
            navigate('/clientes')
        } else {
            toast("Erro ao criar cliente")
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id='nome' value={clientes.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={clientes.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id='senha' value={clientes.senha} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}
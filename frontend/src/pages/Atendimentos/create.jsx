import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createAtendimento } from "../../api/atendimentos";

import './styles.css'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    ativo: true
}

export default function CreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimentos] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimentos({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAtendimentos(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await createAtendimento(atendimento)

        if (response.status === 201) {
            toast("Usuário criado com sucesso")
            navigate('/atendimentos')
        } else {
            toast("Erro ao criar atendimento")
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                    <div>
                    <label>Dia: </label>
                    <input type="date" name="dia" id='nome' value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>Hora: </label>
                    <input type="time" name="hora" id='email' value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="number" name="valor" id='senha' value={atendimento.valor} onChange={handleChange} />
                </div>
                <div>
                    <label>Concluido: </label>
                    <input type="checkbox" name="concluido" id='senha' value={atendimento.concluido} onChange={handleChange} />
                </div>
                <div>
                    <label>ClientId: </label>
                    <input type="number" name="clientId" id='senha' value={atendimento.clientId} onChange={handleChange} />
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
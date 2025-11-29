import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createAtendimento } from "../../api/atendimentos";

import './styles.css'
import { toast } from "react-toastify";


const INITIAL_STATE = {
    dia: '',
    hora: '',
    valor: '',
    concluido: false,
    clientId: ''
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
                <label>Dia: </label>
                <input type="date" id='dia' name="dia" value={atendimento.dia} onChange={handleChange} />
                    <label>Hora: </label>

                <input type="time" id='hora' name="hora" value={atendimento.hora} onChange={handleChange} />
                    <label>Valor: </label>

                <input type="number" id='valor' name="valor" value={atendimento.valor} onChange={handleChange} />
                    <label>Concluido: </label>

                <input type="checkbox" id='concluido' name="concluido" checked={atendimento.concluido} onChange={(e) =>
                    setAtendimentos({ ...atendimento, concluido: e.target.checked })
                } />
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
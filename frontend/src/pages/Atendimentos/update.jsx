import { useEffect, useState } from "react"
import { updateAtendimento } from "../../api/atendimentos";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'
import { toast } from "react-toastify";

export default function UpdateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })
    const location = useLocation()
    const { atendimento: prevAtendimento } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAtendimento({ ...prevAtendimento, senha: '' })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await updateAtendimento(prevAtendimento.id, atendimento)

        if (response.status === 200) {
            navigate('/atendimentos')
            toast("Usuário alterado com sucesso")
        } else {
            toast("Erro ao criar Usuário")
            console.log(response)
        }
    }

    // Adicionado
    useEffect(() => {
        setAtendimento({ ...prevAtendimento, senha: '' })
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>Dia: </label>
                    <input type="text" name="nome" id='nome' value={atendimento.dia} onChange={handleChange} />
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
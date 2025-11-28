import { useEffect, useState } from 'react'
import { deleteAtendimento, getAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function Atendimentos() {
    const navigate = useNavigate()
    const [atendimentos, setAtendimentos] = useState([]);


    const handleUpdate = async (atendimento) => {
        navigate('/update/atendimento', { state: { atendimento } })
    }

    const handleDelete = async (id) => {
        const response = await deleteAtendimento(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setAtendimentos(atendimentos => atendimentos.filter(atendimento => atendimento.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allAtendimentos = await getAtendimentos()
            setAtendimentos(allAtendimentos)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='atendimento-list'>
                <div>
                    <Link to={'/create/atendimento'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div className='atendimento header' key='header'>
                    <label>Dia</label>
                    <label>Hora</label>
                    <label>Valor</label>
                    <label>Concluído</label>
                    <label>Ações</label>

                </div>
                {atendimentos?.length > 0 ? (
                    atendimentos.map((item) => (
                        <div key={item.id}>
                            <p>{item.dia}</p>
                            <p>{item.hora}</p>
                            <p>{item.valor}</p>
                            <p>{item.concluido ? "Concluído" : "Pendente"}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum atendimento encontrado.</p>
                )}
                <div className='actions'>
                    <button
                        type='button'
                        onClick={() => handleUpdate(atendimento)}
                    >Alterar</button>
                    <button
                        type='button'
                        onClick={() => handleDelete(atendimento.id)}
                    >Deleta</button>
                </div>
            </div>


        </main>
    )
}

export default Atendimentos

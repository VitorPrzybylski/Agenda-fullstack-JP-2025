import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    const token = localStorage.getItem('token') // pega token

    return (
        <header>
            <h1>Minha API</h1>

            <nav>

                {/* SEMPRE LIBERADOS */}
                <Link to='/'>
                    <button>Inicio</button>
                </Link>

                <Link to='/create/cliente'>
                    <button>Criar usuário</button>
                </Link>

                <Link to='/login'>
                    <button>Login</button>
                </Link>

                {/* SOMENTE SE LOGADO */}
                {
                    token && (
                        <>
                            <Link to='/atendimentos'>
                                <button>Atendimentos</button>
                            </Link>


                            <Link to='/cliente'>
                                <button>Cliente</button>
                            </Link>
                        </>
                    )
                }

            </nav>
        </header>
    )
}

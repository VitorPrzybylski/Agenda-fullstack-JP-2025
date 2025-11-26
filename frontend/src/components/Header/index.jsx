import { Link } from 'react-router-dom'
import './style.css'


export default function Header() {
    //pegar o token

    return (
        <header>
            <h1>Minha API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>

                <Link to='/clientes'>
                    <button>
                        clientes
                    </button>
                </Link>

                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
            </nav>
        </header>
    )
}
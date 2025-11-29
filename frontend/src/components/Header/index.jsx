import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/Context";

export default function Header() {
  const { cliente } = useContext(AuthContext);

  return (
    <header>
      <h1>Minha API</h1>
      <nav>
        <Link to="/"><button>Início</button></Link>
        <Link to="/create/cliente"><button>Criar usuário</button></Link>
        <Link to="/login"><button>Login</button></Link>

        {cliente && (
          <>
            <Link to="/atendimentos"><button>Atendimentos</button></Link>
            <Link to="/cliente"><button>Cliente</button></Link>
          </>
        )}
      </nav>
    </header>
  );
}

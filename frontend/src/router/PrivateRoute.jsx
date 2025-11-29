import { useContext } from "react";
import { AuthContext } from "../auth/Context";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { cliente } = useContext(AuthContext);

    // Se não tiver token, redireciona para login
    if (!cliente) return <Navigate to="/login" />;

    // Se tiver token, renderiza as rotas filhas
    return <Outlet />;
};

export default PrivateRoute;

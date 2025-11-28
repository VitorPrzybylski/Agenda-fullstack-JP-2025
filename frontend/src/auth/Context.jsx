import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [cliente, setCliente] = useState(null)

    const login = (cliente) => {
        setCliente(cliente)
        localStorage.setItem("cliente", JSON.stringify(cliente))
    }

    const logout = () => {
        setCliente(null)
        localStorage.removeItem("cliente")
    }

    return (
        <AuthContext.Provider value={{ cliente, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
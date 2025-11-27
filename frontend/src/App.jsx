import Header from './components/Header'
import Footer from './components/Footer'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
import { AuthProvider } from './auth/Context'
import Clientes from './pages/Clientes'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/create/cliente' element={<CreateCliente />} />
          <Route path='/login' element={<Login />} />
          <Route path='/update/cliente' element={<UpdateCliente />} />
          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App

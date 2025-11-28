import Header from './components/Header'
import Footer from './components/Footer'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
import { AuthProvider } from './auth/Context'
import Atendimentos from './pages/Atendimentos'
import CreateAtendimento from './pages/Atendimentos/create'
import UpdateAtendimento from './pages/Atendimentos/update'
import Clientes from './pages/Clientes'
import Login from './pages/Login'
import PrivateRoute from './router/PrivateRoute'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/create/cliente' element={<CreateCliente />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
          <Route path='/update/cliente' element={<UpdateCliente />} />
            <Route path='/atendimentos' element={<Atendimentos />} />
            <Route path='/create/atendimento' element={<CreateAtendimento />} />
            <Route path='/update/atendimento' element={<UpdateAtendimento />} />
          </Route>
          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App

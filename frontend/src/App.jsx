import Header from './components/Header'
import Footer from './components/Footer'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
import Clientes from './pages/Clientes'
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/create/cliente' element={<CreateCliente />} />
        <Route path='/update/cliente' element={<UpdateCliente />} />
        {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
      <Footer />
    </>
  )
}

export default App

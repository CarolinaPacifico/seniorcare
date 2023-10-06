import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import QuemSomos from './pages/Home';
import Servicos from './pages/Home';
import Diferencial from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PrestadoresLog from './pages/prestadores-logada';
import Perfil from './pages/perfil'
import Contato from './pages/Contato';
import Planos from './pages/Planos';
import HomeLog from './pages/Home-logada';

//import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/planos" element={<Planos/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<QuemSomos/>}/>
          <Route path="/" element={<Servicos/>}/>
          <Route path="/" element={<Diferencial/>}/>
          <Route path="/prestadores" element={<PrestadoresLog/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/homelog" element={<HomeLog/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

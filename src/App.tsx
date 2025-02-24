import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home'
import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';
import ListaCategoria from './componentes/categoria/listacategoria/ListaCategoria';
import FormCategoria from './componentes/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './componentes/categoria/deletarcategoria/DeletarCategoria';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletartema/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
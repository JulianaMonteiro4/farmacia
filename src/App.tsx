import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home'
import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';

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
          </Routes>
        </div>
        <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
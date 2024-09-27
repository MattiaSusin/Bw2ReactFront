import './assets/Components/Css/App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './assets/Components/React/Login.jsx'
import Registrazione from './assets/Components/React/Registrazione.jsx'
import Cliente from './assets/Components/React/Cliente.jsx'
import Selezione from './assets/Components/React/Selezione.jsx'
import Fattura from './assets/Components/React/Fattura.jsx'

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registrazione/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/selezione" element={<Selezione/>}/>
            <Route path="/cliente" element={<Cliente/>}/>
            <Route path="/fattura" element={<Fattura/>}/>
          </Routes>                                   
      </BrowserRouter>
    </>
  )
}

export default App

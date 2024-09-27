import "./assets/Components/Css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Components/React/Login.jsx";
import Registrazione from "./assets/Components/React/Registrazione.jsx";
import Cliente from "./assets/Components/React/Cliente.jsx";
import Selezione from "./assets/Components/React/Selezione.jsx";
import Fattura from "../src/assets/Components/React/Fattura.jsx";
import DashBoard from "./assets/Components/React/DashBoard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<Registrazione />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/selezione" element={<Selezione />} />
        <Route path="/clienti/crea" element={<Cliente />} />
        <Route path="/fattura" element={<Fattura />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

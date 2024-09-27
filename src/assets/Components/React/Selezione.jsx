import { Button, NavLink } from "react-bootstrap";

const Selezione = () => {
    return(
        <div className="contBtnSelezione">
            <NavLink to="/cliente" className="nav-link">
            <Button className="btnSelezione1">
                REGISTRA UN CLIENTE
            </Button>   
            </NavLink>
            <NavLink to="/fattura" className="nav-link">
            <Button className="btnSelezione2" >
                EMETTI UNA FATTURA
            </Button>
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
            <Button className="btnSelezione3" >
                VAI ALLA DASHBOARD
            </Button>
            </NavLink>
        </div>
    )
}

export default Selezione;
import { Button, NavLink } from "react-bootstrap";

const Selezione = () => {
    return(
        <div className="contBtnSelezione">
            <NavLink to="/cliente" className="nav-link">
            <Button className="btnSelezione">
                REGISTRA UN CLIENTE
            </Button>   
            </NavLink>
            <NavLink to="/fattura" className="nav-link">
            <Button className="btnSelezione" >
                EMETTI UNA FATTURA
            </Button>
            </NavLink>
        </div>
    )
}

export default Selezione;
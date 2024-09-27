import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Selezione = () => {
    return(
        <div className="contBtnSelezione">
            <Link to="/cliente" className="nav-link">
            <Button className="btnSelezione1">
                REGISTRA UN CLIENTE
            </Button>   
            </Link>
            <Link to="/fattura" className="nav-link">
            <Button className="btnSelezione2" >
                EMETTI UNA FATTURA
            </Button>
            </Link>
            <Link to="/dashboard" className="nav-link">
            <Button className="btnSelezione3" >
                VAI ALLA DASHBOARD
            </Button>
            </Link>
        </div>
    )
}

export default Selezione;
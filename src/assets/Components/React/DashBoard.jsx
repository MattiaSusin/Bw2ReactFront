import { Form, } from "react-bootstrap"
import { Link } from "react-router-dom";

const DashBoard = () => {
    return(
        <div className="contTotDash">
      <Form >
          <h1 className="H1Cliente">DASHBOARD</h1>
          <div className="contDashboard">
            <div className="ClientiCont">
                <h2 className="h2Dash">CLIENTI</h2>
            </div>
            <div className="FattureDash">
                <h2 className="h2Dash">FATTURE</h2>
            </div>
            <div className="UtentiDash">
                <h2 className="h2Dash">UTENTI</h2>
            </div>
          </div>
          <div className="ContBtnFattura"> 
      <Link to="/selezione" className="nav-link">
         <button className="btnReg">TORNA ALLA HOME</button>
      </Link>
      </div>
      </Form>
        </div>
        
    )
}
export default DashBoard;
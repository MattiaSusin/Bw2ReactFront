import { Form, InputGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

const Fattura = () => {
    return(
        <div>

      <Form>
          <h1 className="H1Cliente">REGISTRA FATTURA</h1>

          <div className="unione">

<InputGroup className="mb-3 emailFormCliente">
    <InputGroup.Text id="basic-addon1" className="testo">Nome</InputGroup.Text>
    <Form.Control
      placeholder="Nome"
      aria-label="Nome"
      aria-describedby="basic-addon1"
      className="formTextCliente"
    />
  </InputGroup>

  <InputGroup className="mb-3 emailFormCliente">
    <InputGroup.Text id="basic-addon1" className="testo">Cognome</InputGroup.Text>
    <Form.Control
      placeholder="Cognome"
      aria-label="Cognome"
      aria-describedby="basic-addon1"
      className="formTextCliente"
    />
  </InputGroup>

</div>
<div className="unione">


            


          </div>
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text className="testo1">Fatturato </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="formTextCliente"
              placeholder="Fatturato Annuale"
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>



<div className="ContBtnFattura"> 
      <Link to="/selezione" className="nav-link">
         <button className="btnReg">TORNA ALLA HOME</button>
      </Link>
      </div>
      </Form>
        </div>

    )
}

export default Fattura;
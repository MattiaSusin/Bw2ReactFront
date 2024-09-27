import {Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registrazione = () => {
    return(
        <div>
            <Form>
        <h1 className="h1Login">EFFETTUA LA REGISTRAZIONE</h1>

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
<InputGroup className="mb-3 emailFormCliente">
    <InputGroup.Text id="basic-addon1" className="testo" autoComplete="username">Username</InputGroup.Text>
    <Form.Control
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      className="formTextCliente"
    />
  </InputGroup>

<div className="unione">

        <Form.Group className="mb-3 emailFormReg " controlId="exampleForm.ControlInput1">
        <Form.Label className="testo">Email</Form.Label>
        <Form.Control type="email" placeholder="Inserisci la tua email" className="formTextReg" autoComplete="username" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 pwFormReg d-flex" controlId="formPlaintextPassword">
        <Form.Label column sm="4" className="testo">
            Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Inserisci la tua email" className="formTextReg" autoComplete="current-password"/>
        </Col>
      </Form.Group>
      
</div>

      <div className="ContBtnReg"> 
      <Link to="/login" className="nav-link">
         <button className="btnReg">REGISTRATI</button>
      </Link>
      </div>
      </Form>
        </div>
    )
}

export default Registrazione;

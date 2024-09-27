import {Col, Form, InputGroup, NavLink, Row } from "react-bootstrap";

const Registrazione = () => {
    return(
        <div>
            <Form>
        <h1 className="h1Login">EFFETTUA LA REGISTRAZIONE</h1>

      <InputGroup className="contNomeCognReg">
      <InputGroup.Text className="NomeCognReg">Nome e Cognome</InputGroup.Text>
      <Form.Control aria-label="First name" placeholder="Inserisci il nome" className="NomeRegForm"/>
      <Form.Control aria-label="Last name" placeholder="Inserisci il cognome" className="CognomeRegForm"/>
    </InputGroup>
        <InputGroup className="contUsernameReg">
        <InputGroup.Text id="basic-addon1" className="UsernameReg">Username</InputGroup.Text>
        <Form.Control
          placeholder="Inserisci l'username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="usernameFormReg"
        />
      </InputGroup>



        <Form.Group className="mb-3 emailFormReg " controlId="exampleForm.ControlInput1">
        <Form.Label className="emailSignReg">Email</Form.Label>
        <Form.Control type="email" placeholder="Inserisci la tua email" className="formTextReg"/>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 pwFormReg d-flex" controlId="formPlaintextPassword">
        <Form.Label column sm="4" className="pwSign">
            Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Inserisci la tua email" className="formTextReg"/>
        </Col>
      </Form.Group>
      
      <div className="ContBtnReg"> 
      <NavLink to="/login" className="nav-link">
         <button className="btnReg">REGISTRATI</button>
      </NavLink>
      </div>
      </Form>
        </div>
    )
}

export default Registrazione;

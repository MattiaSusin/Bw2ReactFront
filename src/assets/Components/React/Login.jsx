import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="contFormTot">
        <Form>
          <h1 className="h1Login">EFFETTUA IL LOGIN</h1>
          <Form.Group className="mb-3 emailForm " controlId="exampleForm.ControlInput1">
            <Form.Label className="emailSign">Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci la tua email" className="formText" />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 pwForm d-flex" controlId="formPlaintextPassword">
            <Form.Label column sm="4" className="pwSign">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Inserisci la tua email" className="formText" />
            </Col>
          </Form.Group>
          <div className="ContBtn">
            <Link to="/selezione" className="nav-link">
              <Button className="btnlogin">ACCEDI</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;

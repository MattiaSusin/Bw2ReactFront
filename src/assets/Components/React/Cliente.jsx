import { Form, InputGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

const Cliente = () => {
  return (
    <div>
      <Form >
        <h1 className="H1Cliente">REGISTRA IL CLIENTE</h1>
        
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
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">Numero Telefono</InputGroup.Text>
            <Form.Control
              placeholder="Telefono"
              aria-label="Telefono"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          <Form.Group
            className="mb-3 emailFormCliente "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="emailSignReg">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
              className="formTextCliente"
            />
          </Form.Group>
        </div>
        
        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">Ragione Sociale</InputGroup.Text>
            <Form.Control
              placeholder="Ragione Sociale"
              aria-label="Ragione Sociale"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">Partita iva</InputGroup.Text>
            <Form.Control
              placeholder="Partita iva"
              aria-label="Partita iva"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>
        </div>
        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text className="testo1">Fatturato </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="formTextCliente"
              placeholder="Fatturato Annuale"
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">PEC</InputGroup.Text>
            <Form.Control
              placeholder="PEC"
              aria-label="PEC"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>
        </div>
          <div className="proviamolo">
          <InputGroup.Text id="basic-addon1" className="text-center">
              Inidirizzo
            </InputGroup.Text>
          </div>
        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente ">
            <InputGroup.Text id="basic-addon1" className="testo">
              Inidirizzo
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede legale"
              aria-label="Indirizzo sede legale"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Città
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede operativa"
              aria-label="Indirizzo sede operativa"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          
        </div>

        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente ">
            <InputGroup.Text id="basic-addon1" className="testo">
              Inidirizzo
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede legale"
              aria-label="Indirizzo sede legale"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Città
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede operativa"
              aria-label="Indirizzo sede operativa"
              aria-describedby="basic-addon1"
              className="formTextCliente"
            />
          </InputGroup>

          
        </div>

        
          
          <div className="divAziendaClie">
            <InputGroup.Text id="basic-addon1" className="testoClieAzienda">
              Tipologia Azienda
            </InputGroup.Text>
          <Form.Select
            aria-label="Default select example"
            className="formTextCliente"
          >

            <option></option>

            <option value="1">PA</option>
            <option value="2">SAS</option>
            <option value="3">SPA</option>
            <option value="4">SRL</option>
            <option value="5">SNC</option>
            <option value="6">SS</option>
            <option value="7">SAPA</option>
          </Form.Select>

          </div>
        

        <div className="unione">
          <Form className="FormDataPrenotazione">
            
            <Form.Group
              controlId="formDate"
              className="d-flex emailFormCliente"
            >
              Data Inserimento
              <Form.Control
                type="date"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent text-light pb-5 formTextCliente"
              />
            </Form.Group>
          </Form>

          <Form className="FormDataPrenotazione">
            <Form.Group
              controlId="formDate"
              className="d-flex emailFormCliente"
            >
              Data ultimo contatto
              <Form.Control
                type="date"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent text-light pb-5 formTextCliente"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="ContBtnFattura"> 
      <Link to="/selezione" className="nav-link">
         <button className="btnReg">TORNA ALLA HOME</button>
      </Link>
      <button className="btnCliente">SALVA CLIENTE</button>
      </div>
      </Form>
    </div>
  );
};

export default Cliente;

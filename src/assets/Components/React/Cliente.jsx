import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cliente = () => {
  const [ragioneSociale, setRagioneSociale] = useState("");
  const [partitaIva, setPartitaIva] = useState("");
  const [dataInserimento, setDataInserimento] = useState("");
  const [dataUltimoContatto, setDataUltimoContatto] = useState("");
  const [fatturatoAnnuale, setFatturatoAnnuale] = useState("");
  const [pec, setPec] = useState("");
  const [telefono, setTelefono] = useState("");
  const [emailContatto, setEmailContatto] = useState("");
  const [nomeContatto, setNomeContatto] = useState("");
  const [cognomeContatto, setCognomeContatto] = useState("");
  const [tipoAzienda, setTipoAzienda] = useState("");
  const [indirizzoSedeLegale, setIndirizzoSedeLegale] = useState("");
  const [indirizzoSedeOperativa, setIndirizzoSedeOperativa] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cliente = {
      ragioneSociale,
      partitaIva,
      dataInserimento,
      dataUltimoContatto,
      fatturatoAnnuale,
      pec,
      telefono,
      emailContatto,
      nomeContatto,
      cognomeContatto,
      tipoAzienda,
      indirizzoSedeLegale,
      indirizzoSedeOperativa,
    };

    try {
      const resp = await fetch(`http://localhost:3001/clienti/crea`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        alert("CLiente salvato con successo.");
      } else {
        alert("Registrazione cliente fallita.");
      }
    } catch (error) {
      console.error("Errore: ", error);
      alert("Errore durante la registrazione del cliente");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1 className="H1Cliente">REGISTRA IL CLIENTE</h1>

        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Nome
            </InputGroup.Text>
            <Form.Control
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={nomeContatto}
              onChange={(e) => setNomeContatto(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Cognome
            </InputGroup.Text>
            <Form.Control
              placeholder="Cognome"
              aria-label="Cognome"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={cognomeContatto}
              onChange={(e) => setCognomeContatto(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Numero Telefono
            </InputGroup.Text>
            <Form.Control
              placeholder="Telefono"
              aria-label="Telefono"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </InputGroup>

          <Form.Group className="mb-3 emailFormCliente " controlId="exampleForm.ControlInput1">
            <Form.Label className="emailSignReg">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
              className="formTextCliente"
              value={emailContatto}
              onChange={(e) => setEmailContatto(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Ragione Sociale
            </InputGroup.Text>
            <Form.Control
              placeholder="Ragione Sociale"
              aria-label="Ragione Sociale"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={ragioneSociale}
              onChange={(e) => setRagioneSociale(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Partita iva
            </InputGroup.Text>
            <Form.Control
              placeholder="Partita iva"
              aria-label="Partita iva"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={partitaIva}
              onChange={(e) => setPartitaIva(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text className="testo1">Fatturato Annuale </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="formTextCliente"
              placeholder="Fatturato Annuale"
              value={fatturatoAnnuale}
              onChange={(e) => setFatturatoAnnuale(e.target.value)}
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              PEC
            </InputGroup.Text>
            <Form.Control
              placeholder="PEC"
              aria-label="PEC"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={pec}
              onChange={(e) => setPec(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente ">
            <InputGroup.Text id="basic-addon1" className="testo">
              Indirizzo sede legale
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede legale"
              aria-label="Indirizzo sede legale"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={indirizzoSedeLegale}
              onChange={(e) => setIndirizzoSedeLegale(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Indirizzo sede operativa
            </InputGroup.Text>
            <Form.Control
              placeholder="Indirizzo sede operativa"
              aria-label="Indirizzo sede operativa"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={indirizzoSedeOperativa}
              onChange={(e) => setIndirizzoSedeOperativa(e.target.value)}
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
            value={tipoAzienda}
            onChange={(e) => setTipoAzienda(e.target.value)}
          >
            <option></option>

            <option value="PA">PA</option>
            <option value="SAS">SAS</option>
            <option value="SPA">SPA</option>
            <option value="SRL">SRL</option>
            <option value="SNC">SNC</option>
            <option value="SS">SS</option>
            <option value="SAPA">SAPA</option>
          </Form.Select>
        </div>

        <div className="unione">
          <Form className="FormDataPrenotazione">
            <Form.Group controlId="formDate" className="d-flex emailFormCliente">
              Data Inserimento
              <Form.Control
                type="date"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent text-light pb-5 formTextCliente"
                value={dataInserimento}
                onChange={(e) => setDataInserimento(e.target.value)}
              />
            </Form.Group>
          </Form>

          <Form className="FormDataPrenotazione">
            <Form.Group controlId="formDate" className="d-flex emailFormCliente">
              Data ultimo contatto
              <Form.Control
                type="date"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent text-light pb-5 formTextCliente"
                value={dataUltimoContatto}
                onChange={(e) => setDataUltimoContatto(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="ContBtnFattura">
          <button type="submit" className="btnReg">
            Salva CLiente
          </button>
          <Link to="/selezione" className="nav-link">
            <button className="btnReg">TORNA ALLA HOME</button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Cliente;

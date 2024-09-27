import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Fattura = () => {
  const [importo, setImporto] = useState("");
  const [cliente, setCliente] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const fattura = { importo, cliente };

    try {
      const resp = await fetch(`http://localhost:3001/fatture/crea`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fattura),
      });

      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        alert("Fattura registrata con successo.");
      } else {
        alert("Registrazione fattura fallita.");
      }
    } catch (error) {
      console.error("Errore: ", error);
      alert("Errore durante la registrazione della fattura");
    }
  };
  return (
    <div>
      <Form onSubmit={handleRegister}>
        <h1 className="H1Cliente">REGISTRA FATTURA</h1>

        <div className="unione">
          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Importo
            </InputGroup.Text>
            <Form.Control
              placeholder="Importo"
              aria-label="Importo"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={importo}
              onChange={(e) => setImporto(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3 emailFormCliente">
            <InputGroup.Text id="basic-addon1" className="testo">
              Cliente
            </InputGroup.Text>
            <Form.Control
              placeholder="Cliente"
              aria-label="Cliente"
              aria-describedby="basic-addon1"
              className="formTextCliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="ContBtnFattura">
          <button className="btnReg" type="submit">
            Registra Fattura
          </button>
          <Link to="/selezione" className="nav-link">
            <button className="btnReg">TORNA ALLA HOME</button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Fattura;

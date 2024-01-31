'use client';

import Button from "../../../../tools/Button";
import getAllCriteres from "../../../../utils/AllCriteresGetter";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import send_raw_post from "../../../../utils/Sender";
import Alert from 'react-bootstrap/Alert';

export default function Marques() {
  const [allMarque, setAllMarque] = useState(null);
  const [session, setSession] = useState(null);
  const [wait, setWait] = useState(true);
  const [newMarque, setNewMarque] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedSessionString = sessionStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      
      //statistique
      getAllCriteres("https://vente-occaz-production-nomena.up.railway.app/api/v1", sess.donnee.token).then(reponse => {
          const criteres = reponse;
          console.log(criteres);
          setAllMarque(criteres.marques);
          setWait(false);
      });
    }

  }, []);

  const getColor = (id) => {
    const colors = ['primary', 'secondary', 'warning', 'danger', 'success', 'info'];
    const clazz = `card bg-${colors[id % colors.length]} text-white mb-3`;
    return clazz;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const raw = {
      nomMarque : newMarque 
    }
    send_raw_post('https://vente-occaz-production-nomena.up.railway.app/api/v1/marques', raw, session.donnee.token).then((reponse) => {
      if(reponse.code != '200') {
        setError(reponse.message);
      } else {
        setTimeout(async () => {
          window.location.reload();
        }, 1000);
      }
    });
  }
  
  return (
    <Container>
      <Card style={{ width: "50%", marginBottom: "2vh" }}>
        <CardHeader>Creation de Marque</CardHeader>
        <CardBody>
          <Row>
            <Col>
              {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon11">
                    nom
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="entrez le nom de la Marque"
                    aria-label="entrez le nom de la Marque"
                    aria-describedby="basic-addon11"
                    onChange={(e) => {setNewMarque(e.target.value)}}
                    value={newMarque}
                    required
                  />
                  <Button
                    type="submit"
                    Marque_theme="btn btn-warning"
                    label="creer"
                  ></Button>
                </div>
              </form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Liste des Marques</CardHeader>
        <CardBody>
          <Row>
          {wait && (<Spinner animation="border" variant="success" />)}
          {allMarque && allMarque.map((Marque, index) => (
              <Col md={6} xl={4} key={index}>
              <div className={getColor(index)}>
                <div className="card-header">{Marque.nomMarque}</div>
              </div>
            </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

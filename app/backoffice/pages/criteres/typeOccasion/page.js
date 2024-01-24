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

export default function TypeOccasions() {
  const [allTypeOccasion, setAllTypeOccasion] = useState(null);
  const [session, setSession] = useState(null);
  const [wait, setWait] = useState(true);
  const [newTypeOccasion, setNewTypeOccasion] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      
      //statistique
      getAllCriteres("https://vente-occaz-production.up.railway.app/api/v1", sess.donnee.token).then(reponse => {
          const criteres = reponse;
          console.log(criteres);
          setAllTypeOccasion(criteres.typeOccasions);
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
      nomTypeOccasion : newTypeOccasion 
    }
    send_raw_post('https://vente-occaz-production.up.railway.app/api/v1/type-occasions', raw, session.donnee.token).then((reponse) => {
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
        <CardHeader>Creation de Type Occasion</CardHeader>
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
                    placeholder="entrez le nom du Type Occasion"
                    aria-label="entrez le nom du Type Occasion"
                    aria-describedby="basic-addon11"
                    onChange={(e) => {setNewTypeOccasion(e.target.value)}}
                    value={newTypeOccasion}
                    required
                  />
                  <Button
                    type="submit"
                    TypeOccasion_theme="btn btn-warning"
                    label="creer"
                  ></Button>
                </div>
              </form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Liste des Type Occasions</CardHeader>
        <CardBody>
          <Row>
          {wait && (<Spinner animation="border" variant="success" />)}
          {allTypeOccasion && allTypeOccasion.map((TypeOccasion, index) => (
              <Col md={6} xl={4} key={index}>
              <div className={getColor(index)}>
                <div className="card-header">{TypeOccasion.nomTypeOccasion}</div>
              </div>
            </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

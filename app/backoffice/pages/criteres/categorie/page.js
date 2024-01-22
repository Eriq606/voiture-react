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
import { useRouter } from 'next/navigation';

export default function Categories() {
  const router = useRouter();
  const [allCategorie, setAllCategorie] = useState(null);
  const [session, setSession] = useState(null);
  const [wait, setWait] = useState(true);
  const [newCategorie, setNewCategorie] = useState("");
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
          setAllCategorie(criteres.categories);
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
      nomCategorie : newCategorie 
    }
    send_raw_post('https://vente-occaz-production.up.railway.app/api/v1/categories', raw, session.donnee.token).then((reponse) => {
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
        <CardHeader>Creation de categorie</CardHeader>
        <CardBody>
          <Row>
            <Col>
              {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
              <form onSubmit={handleSubmit}>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon11">
                    nom
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="entrez le nom de la categorie"
                    aria-label="entrez le nom de la categorie"
                    aria-describedby="basic-addon11"
                    onChange={(e) => {setNewCategorie(e.target.value)}}
                    value={newCategorie}
                    required
                  />
                  <Button
                    type="submit"
                    couleur_theme="btn btn-warning"
                    label="creer"
                  ></Button>
                </div>
              </form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Liste des categories</CardHeader>
        <CardBody>
          <Row>
          {wait && (<Spinner animation="border" variant="success" />)}
          {allCategorie && allCategorie.map((categorie, index) => (
              <Col md={6} xl={4} key={index}>
              <div className={getColor(index)}>
                <div className="card-header">{categorie.nomCategorie}</div>
              </div>
            </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

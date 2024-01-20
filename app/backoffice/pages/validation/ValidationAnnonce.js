"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";

import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Product from "../../../tools/Product";
import getAllAnnonces from "@/app/tools/dataTest/listeAnnonce";
import get from "@/app/utils/Getter";
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react";

export default function Validation() {
    const [session, setSession] = useState(null);
    const [allAnnonces, setAllAnnonces] = useState([]);
    const [error, setError] = useState(null);

    function formatDate (dateString) {
      const dateObject = new Date(dateString);

      // Obtenir les composants de la date
      const jour = dateObject.getDate();
      const mois = dateObject.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
      const annee = dateObject.getFullYear();
      const dateheure = `${dateObject.getHours() < 10 ? '0' : ''}${dateObject.getHours()}:${dateObject.getMinutes() < 10 ? '0' : ''}${dateObject.getMinutes()}:${dateObject.getSeconds() < 10 ? '0' : ''}${dateObject.getSeconds()}`;

      return `${jour < 10 ? '0' : ''}${jour}-${mois < 10 ? '0' : ''}${mois}-${annee} ${dateheure}`;
    }

    useEffect(() => {
      const storedSessionString = localStorage.getItem("userSession");
      if (storedSessionString) {
        const sess = JSON.parse(storedSessionString);
        setSession(sess);
        
        //statistique
        get(
          "https://vente-occaz-production.up.railway.app/api/v1/annonces/non-validees",
          sess.donnee.token
        ).then(reponse => {
          if(reponse.code == '200') {
            const annoncesNonValides = reponse.donnee;
            console.log(annoncesNonValides);
            setAllAnnonces(annoncesNonValides);
          } else {
            setError(reponse.message);
          }
        });
      }

    }, []);

  return (
    <Container className="h-100">
      {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
      <div className="mt-3">
        <strong>Validation des annonces</strong>
      </div>
      <Row className="mt-3">
        {allAnnonces.map((annonce, index) => (
          <Col className="mb-3" md={4} key={index}>
            <Card>
              <CardHeader>
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                    {annonce.proprietaire.email}
                  </Col>
                  <Col style={{ textAlign : 'right' }}>{formatDate(annonce.dateHeureCreation)}</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Product annonce={annonce} />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

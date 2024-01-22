"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import send_raw from '../../../utils/Sender';
import Spinner from 'react-bootstrap/Spinner';

export default function Statistiques() {

    const [session, setSession] = useState(null);
    const [statistique, setStatistique] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
      const storedSessionString = localStorage.getItem("userSession");
      if (storedSessionString) {
        const sess = JSON.parse(storedSessionString);
        setSession(sess);
        
        //statistique
        send_raw(
          "https://vente-occaz-production.up.railway.app/api/v1/admin/statistiqueDefaut",
          {},
          sess.donnee.token
        ).then(reponse => {
          if(reponse.code == '200') {
            const stat = reponse.donnee;
            console.log(stat);
            setStatistique(stat);
          } else {
            setError(reponse.message);
          }
        });
      }

    }, []);

    
    const getMoneyFormat = (number) => {
        return  number.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
          });
    };

    return (
    <Container className="h-100">
      {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
      <Card className="h-100">
        <CardHeader>
          <strong>Statistiques</strong>
        </CardHeader>
        <CardBody className="h-90">
          {(statistique != null) && (
            <>
            <Row className="h-50 mb-1">
            <Col>
              <Card className="h-100" bg="info">
                <CardHeader><h2>Nombre utilisateurs</h2></CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1>{statistique.nombreUtilisateur}</h1>
                    </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="h-100" bg="warning">
                <CardHeader><h2>Chiffre affaire</h2></CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1>{isNaN(statistique.chiffreAffaire) ? (<Spinner animation="border" variant="warning" />) : `${getMoneyFormat(Number(statistique.chiffreAffaire))}`}</h1>
                    </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="h-50">
          <Col>
              <Card className="h-100" bg="light">
                <CardHeader><h2>Commission par annonce</h2></CardHeader>
                <CardBody>
                    <Row className="h-100 d-flex align-items-center">
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Minimum</h6>
                            </div>
                            <div className="text-center">
                                <h3>{isNaN(statistique.chiffreAffaire) ? (<Spinner animation="border" variant="light" />) : `${getMoneyFormat(Number(statistique.minCommission))}`}</h3>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Moyenne</h6>
                            </div>
                            <div className="text-center">
                                <h3>{isNaN(statistique.chiffreAffaire) ? (<Spinner animation="border" variant="light" />) : `${getMoneyFormat(Number(statistique.moyenneCommission))}`}</h3>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Maximum</h6>
                            </div>
                            <div className="text-center">
                                <h3>{isNaN(statistique.chiffreAffaire) ? (<Spinner animation="border" variant="light" />) : `${getMoneyFormat(Number(statistique.maxCommission))}`}</h3>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
            </>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

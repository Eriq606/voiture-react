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
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';

export default function Statistiques() {

    const [session, setSession] = useState(null);
    const [statistique, setStatistique] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
      const storedSessionString = sessionStorage.getItem("userSession");
      if (storedSessionString) {
        const sess = JSON.parse(storedSessionString);
        setSession(sess);
        
        //statistique
        send_raw(
          "https://vente-occaz-production-de3d.up.railway.app/api/v1/admin/statistique",
          {},
          sess.donnee.token
        ).then(reponse => {
          if(reponse.code == '200') {
            const stat = reponse.donnee;
            console.log(stat);
            setStatistique(stat);
            console.log([statistique.minCommission, statistique.moyenneCommission, statistique.maxCommission]);
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
    <Container>
      {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
      <Card className="h-100">
        <CardHeader>
          <strong>Statistiques</strong>
        </CardHeader>
        <CardBody style={{ height:'fit-content' }}>
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
          <Row style={{ height: 'fit-content'}} >
          <Col>
              <Card className="h-100" >
                <CardHeader><h2>Commission par annonce</h2></CardHeader>
                <CardBody>
                    {/* <Row className="h-100 d-flex align-items-center">
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
                    </Row> */}
                    <div className="App">
                      <div className="w-100 h-100">
                          <Bar
                              data={{
                                  // Name of the variables on x-axies for each bar
                                  labels: [`Minimum ${getMoneyFormat(Number(statistique.minCommission))}`, `Moyenne ${getMoneyFormat(Number(statistique.moyenneCommission))}`, `Maximum ${getMoneyFormat(Number(statistique.maxCommission))}`],
                                  datasets: [
                                      {
                                          // Label for bars
                                          label: ['statistique de la commission'],
                                          // Data or value of your each variable
                                          data: [statistique.minCommission, statistique.moyenneCommission, statistique.maxCommission],
                                          // Color of each bar
                                          backgroundColor: 
                                              ["rgba(255, 99, 132, 0.2)", "rgba(252, 252, 86, 0.2)", "rgba(54, 162, 235, 0.2)"],
                                          // Border color of each bar
                                          borderColor: ["rgba(255, 99, 132, 1)", "rgba(252, 252, 86, 1)", "rgba(54, 162, 235, 1)"],
                                          borderWidth: 0.5,
                                      },
                                  ],
                              }}
                              // Height of graph
                              height={400}
                              options={{
                                  maintainAspectRatio: false,
                                  scales: {
                                      yAxes: [
                                          {
                                              ticks: {
                                            // The y-axis value will start from zero
                                                  beginAtZero: true,
                                              },
                                          },
                                      ],
                                  },
                                  legend: {
                                      labels: {
                                          fontSize: 15,
                                      },
                                  },
                              }}
                          />
                      </div>
                  </div>
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

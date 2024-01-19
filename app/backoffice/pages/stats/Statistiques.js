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

export default function Statistiques() {
    const montant = 250000000.00;

    const getMoneyFormat = (number) => {
        return  number.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
          });
    };

    return (
    <Container className="h-100">
      <Card className="h-100">
        <CardHeader>
          <strong>Statistiques</strong>
        </CardHeader>
        <CardBody className="h-100">
          <Row className="h-50 mb-1">
            <Col>
              <Card className="h-100">
                <CardHeader><h2>Nombre utilisateurs</h2></CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1>185</h1>
                    </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <CardHeader><h2>Chiffre affaire</h2></CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1>{getMoneyFormat(montant)}</h1>
                    </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="h-50">
          <Col>
              <Card className="h-100">
                <CardHeader><h2>Commission</h2></CardHeader>
                <CardBody>
                    <Row className="h-100 d-flex align-items-center">
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Minimum</h6>
                            </div>
                            <div className="text-center">
                                <h3>{getMoneyFormat(montant)}</h3>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Moyenne</h6>
                            </div>
                            <div className="text-center">
                                <h3>{getMoneyFormat(montant)}</h3>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="text-center">
                                <h6>Maximum</h6>
                            </div>
                            <div className="text-center">
                                <h3>{getMoneyFormat(montant)}</h3>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

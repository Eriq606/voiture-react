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

export default function Validation() {
  const allAnnonces = getAllAnnonces().donnee;

  return (
    <Container className="h-100">
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
                  <Col>{annonce.dateHeureCreation}</Col>
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

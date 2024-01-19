"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
  } from "react-bootstrap";

import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Validation () {

    const allAnnonces = [
        {
            idAnnonce : 1,
            user : "harena",
            dateheure : "2024-02-03 11:00:00",
            url : 'https://i.ibb.co/YP9M4JX/car2.jpg',
            description : "belle voiture"
        },{
            idAnnonce : 2,
            user : "harena 2",
            dateheure : "2024-02-03 11:00:00",
            url : 'https://i.ibb.co/YP9M4JX/car2.jpg',
            description : "belle voiture"
        },{
            idAnnonce : 3,
            user : "harena 3",
            dateheure : "2024-02-03 11:00:00",
            url : 'https://i.ibb.co/YP9M4JX/car2.jpg',
            description : "belle voiture"
        },{
            idAnnonce : 4,
            user : "harena 3",
            dateheure : "2024-02-03 11:00:00",
            url : 'https://i.ibb.co/YP9M4JX/car2.jpg',
            description : "belle voiture"
        }
    ];

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
                            <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                                {annonce.user} {annonce.dateheure}
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <Image src={annonce.url} alt="not found" rounded fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    {annonce.description}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
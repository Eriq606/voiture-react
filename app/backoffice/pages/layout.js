'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import VerticalMenu from "./VerticalMenu";

export default function Layout({ children }) {
  return (
      <Container fluid>
        <Row style={{ height:"100vh" }} >
          <Col md={2} className='mt-5'>
            <VerticalMenu />
          </Col>
          <Col md={10} className='mt-5'>
            {children}
          </Col>
        </Row>
      </Container>
    );
}
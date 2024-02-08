'use client';

import { Button, Col, Form } from "react-bootstrap";
import styles from "./connectmobile.module.css";
import { useState } from "react";
export default function ConnectMobileForm(){
    const [codeValue, setCode] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(codeValue);
    }
    return(<>
        <Col md={{span:6, offset:3}} className={styles.connectmobileform}>
            <p>Entrer le code d&apos;authentification</p>
            <Form>
                <Form.Control onSubmit={handleFormSubmit} type="text" placeholder="Code..." value={codeValue} onChange={(e) => setCode(e.target.value)}></Form.Control>
                <br></br>
                <Button type="submit" variant="info">Se connecter</Button>
            </Form>
        </Col>
    </>);
}
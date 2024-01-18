'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export default function Login () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Entrez l'addresse email" required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Entrez le mot de passe" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
    );
}
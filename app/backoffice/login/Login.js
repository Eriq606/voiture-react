'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import send_raw from '../../utils/Sender';

export default function Login () {

    const router = useRouter();
    const [mail, setEmail] = useState("admin@gmail.com");
    const [pwd, setMotDePasse] = useState("1234");
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      const raw = {
        email : mail,
        motDePasse : pwd
      };
      console.log(raw);
      try {
          setWait(true);
          const session = await send_raw("https://vente-occaz-production-nomena.up.railway.app/api/v1/login-admin", raw, null);
          console.log(session);
          if(session.code == '200') {
            const sessionString = JSON.stringify(session);
            sessionStorage.setItem('userSession', sessionString);
            setTimeout(async () => {
                setWait(false);
                router.push("/backoffice/pages");
            }, 1000);
          } else {
            setError(session.message);
          }
      } catch (e) {
        setWait(false);
        setError('email ou mot de passe erroné');
      }
    }

    return (
      <>
        {wait && (<Spinner animation="border" variant="success" />)}
        {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Entrez l'addresse email" value={mail} onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Entrez le mot de passe" value={pwd} onChange={(e) => setMotDePasse(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
      </>
    );
}
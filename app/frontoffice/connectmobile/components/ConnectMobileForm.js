import { Button, Col, Form } from "react-bootstrap";
import styles from "./connectmobile.module.css";
export default function ConnectMobileForm(){
    return(<>
        <Col md={{span:6, offset:3}} className={styles.connectmobileform}>
            <p>Entrer le code d'authentification</p>
            <Form>
                <Form.Control type="text" placeholder="Code..."></Form.Control>
                <br></br>
                <Button variant="info">Se connecter</Button>
            </Form>
        </Col>
    </>);
}
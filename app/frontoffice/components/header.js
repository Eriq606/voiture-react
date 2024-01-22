import styles from "./header.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
export default function Header(){
    return(<>
    <Form>
        <div className={styles.listeannonce__header}>
            <div className={styles.listeannonce__header__fieldinput__select}>
                <Form.Label>Categorie</Form.Label>
                <Form.Select>
                    <option>Tout</option>
                </Form.Select>
            </div>
            <div className={styles.listeannonce__header__fieldinput__select}>
                <Form.Label>Marque</Form.Label>
                <Form.Select>
                    <option>Tout</option>
                </Form.Select>
            </div>
            <div className={styles.listeannonce__header__fieldinput__select}>
                <Form.Label>Modele</Form.Label>
                <Form.Select>
                    <option>Tout</option>
                </Form.Select>
            </div>
            <div className={styles.listeannonce__header__fieldinput__text}>
                <Form.Label>Prix minimum</Form.Label>
                <Form.Control type="text"></Form.Control>
            </div>
            <div className={styles.listeannonce__header__fieldinput__text}>
                <Form.Label>Prix maximum</Form.Label>
                <Form.Control type="text"></Form.Control>
            </div>
            <div>
                <Button variant="info">Filtrer</Button>
            </div>
        </div>
    </Form>
    </>);
}
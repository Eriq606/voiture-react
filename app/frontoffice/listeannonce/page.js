import Annonce from "../components/annonce";
import styles from "@/app/frontoffice/listeannonce.module.css";
import { reponse } from "../format_annonce";
import Header from "../components/header";
import { Col } from "react-bootstrap";
const annonces=reponse.donnee;
export default function ListeAnnonce(){
    return (
        <>
        <Col md={9}>
            <Header></Header>
            <div className={styles.listeannonce}>
                {annonces.map((annonce)=>{
                    return <Annonce key={annonce.idAnnonce} annonce={annonce}></Annonce>
                })}
            </div>
        </Col>
        </>
    );
}
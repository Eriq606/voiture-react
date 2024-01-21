import { Col, Row } from "react-bootstrap";
import ConnectMobileForm from "./components/ConnectMobileForm";
import styles from "./favori.module.css";

export default function Page(){
    return(<>
        <Col md={9}>
            <Row>
                <Col md={{span:6,offset:3}} style={{textAlign:"center",marginTop:"25vh"}}>
                    <h1>Se connecter avec mobile</h1>
                </Col>
            </Row>
            <Row>
                <ConnectMobileForm></ConnectMobileForm>
            </Row>
        </Col>
    </>);
}
import { Card, CardBody, CardHeader, Container } from "react-bootstrap";
import Login from "./Login";

export default function page () {
    const containerStyle = {
        height: "100vh", // 100% de la hauteur de la vue (viewport)
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Centre le contenu verticalement
    };

    const cardStyle = {
        
    }

    return (
        <Container style={containerStyle}>
            <Card>
                <CardHeader><strong>Login</strong></CardHeader>
                <CardBody>
                    <Login />
                </CardBody>
            </Card>
        </Container>
    );
}
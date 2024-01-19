import Button from "@/app/tools/Button";
import getAllCategories from "@/app/tools/dataTest/listeCategories";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";

export default function Categories() {
  const allCategorie = getAllCategories().donnee;
  const getColor = (id) => {
    const colors = ['primary', 'secondary', 'warning', 'danger', 'success', 'info'];
    const clazz = `card bg-${colors[id % colors.length]} text-white mb-3`;
    return clazz;
  }
  
  return (
    <Container>
      <Card style={{ width: "50%", marginBottom: "2vh" }}>
        <CardHeader>Creation de categorie</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <form>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon11">
                    nom
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="entrez le nom de la categorie"
                    aria-label="entrez le nom de la categorie"
                    aria-describedby="basic-addon11"
                    required
                  />
                  <Button
                    type="submit"
                    couleur_theme="btn btn-warning"
                    label="creer"
                  ></Button>
                </div>
              </form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Liste des categories</CardHeader>
        <CardBody>
          <Row>
          {allCategorie.map((categorie, index) => (
              <Col md={6} xl={4} key={index}>
              <div className={getColor(index)}>
                <div className="card-header">{categorie.nomCategorie}</div>
              </div>
            </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import send_formData_post from '../utils/SenderFormDataPost';
import { useRouter } from 'next/navigation';

function ValiderAnnonce(props) {
    const router = useRouter();

    const [session, setSession] = useState(null);
    const [commission, setCommission] = useState(20);

    function getMoneyFormat(montant) {
        const montantFormate = montant.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
        });
        return montantFormate;
    }

    useEffect(() => {
        const storedSessionString = localStorage.getItem("userSession");
        if (storedSessionString) {
          const sess = JSON.parse(storedSessionString);
          setSession(sess);
        }
  
      }, []);

      async function valider(annonce) {
        if(session) {
            const formData = new FormData();
            formData.append('idAnnonce', annonce.idAnnonce);
            formData.append('pourcentageCommission', commission);
            formData.append('idAdmin', session.donnee.utilisateur.idUtilisateur);
            send_formData_post(
                `https://vente-occaz-production.up.railway.app/api/v1/annonces/validation`,
                formData,
                session.donnee.token
              ).then((reponse) => {
                const a = reponse.donnee;
                console.log("validation OK ! ", a);
                });
            setTimeout(async () => {
                window.location.reload();
            }, 1000);
        } else {
            console.log('session null !');
        }
      }

    return (
        <Modal
            {...props}
            size='sm'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Validation annonce {props.annonce && (<>de {props.annonce.proprietaire.email}</>)}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.annonce && (
                    <Row>
                      <Col>
                        <h4>{props.annonce.description}</h4>
                        <p>
                            <h6>Categorie : {props.annonce.categorie.nomCategorie}</h6>
                        </p>
                        <p>
                            <h6>Modele : {props.annonce.modele.nomModele}</h6>
                        </p>
                        <p>
                            <h6>Marque : {props.annonce.marque.nomMarque}</h6>
                        </p>
                        <p>
                            <h6>Type occasion : {props.annonce.typeOccasion.nomTypeOccasion}</h6>
                        </p>
                        <p>
                            <h6>Couleur : {props.annonce.couleur.nomCouleur}</h6>
                        </p>
                        <p>
                            <h6>Prix : {getMoneyFormat(props.annonce.prix)}</h6>
                        </p>
                      </Col>
                    </Row>
                )}
                <Row>
                <Col>
                  <div class="card mb-4">
                    <h5 class="card-header">Commission</h5>
                    <div class="card-body">
                      <div class="form-floating">
                        <input type="number" min={0} class="form-control" id="floatingInput" placeholder="" onChange={(e) => setCommission(e.target.value)} value={commission} aria-describedby="floatingInputHelp" required />
                        <label for="floatingInput">Entrez la commission à retirer</label>
                        <div id="floatingInputHelp" class="form-text">
                          La commission retirée à cette annonce nous est destinée
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='d-flex' style={{ justifyContent : 'space-evenly' }}>
                <Button couleur_theme='btn btn-success' onClick={() => {valider(props.annonce)}}>Valider</Button>
                <Button onClick={props.onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ValiderAnnonce;
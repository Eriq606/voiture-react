import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DetailAnnonce(props) {
    function getMoneyFormat(montant) {
        const montantFormate = montant.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
        });
        return montantFormate;
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
                    Detail annonce {props.annonce && (<>de {props.annonce.proprietaire.email}</>)}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.annonce && (
                    <>
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
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailAnnonce;
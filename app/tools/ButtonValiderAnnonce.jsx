import React from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ValiderAnnonce from './ValiderAnnonce';

function ButtonValiderAnnonce({clazz = 'btn btn-info', label = 'valider', annonce = null}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant={clazz} onClick={() => setModalShow(true)}>
          {label}
        </Button>
  
        <ValiderAnnonce
          show={modalShow}
          onHide={() => setModalShow(false)}
          annonce={annonce}
        />
      </>
    );
}

export default ButtonValiderAnnonce;

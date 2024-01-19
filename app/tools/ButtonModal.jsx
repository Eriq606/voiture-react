import React from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';
import Button from 'react-bootstrap/Button';
import DetailAnnonce from './DetailAnnonce';

function ButtonModal({clazz = 'btn btn-info', label = 'rechercher', annonce = null}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant={clazz} onClick={() => setModalShow(true)}>
          {label}
        </Button>
  
        <DetailAnnonce
          show={modalShow}
          onHide={() => setModalShow(false)}
          annonce={annonce}
        />
      </>
    );
}

export default ButtonModal;

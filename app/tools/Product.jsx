
import React, { useState, useEffect } from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';
// import product_img from '../assets/assets/img/elements/4.jpg';
import Button from '../tools/Button';
import Image from 'next/image';
import ButtonDetailAnnonce from './ButtonDetailAnnonce';
import ButtonValiderAnnonce from './ButtonValiderAnnonce';

function Product({ annonce, images }) {

    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    const [mainImageIndex, setMainImageIndex] = useState(0);

    function getMoneyFormat(montant) {
        const montantFormate = montant.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
        });
        return montantFormate;
    }

    useEffect(() => {
        const storedSessionString = sessionStorage.getItem("userSession");
        if (storedSessionString) {
          const sess = JSON.parse(storedSessionString);
          setSession(sess);
        }
  
      }, []);

    const handleImageClick = (index) => {
        setMainImageIndex(index);
    };

    const liste_images = annonce.listePhotos.map((product_image, index) => (
        <div style={{ height: '8vh', width: '20vw' }} key={index}>
            <img
                key={index}
                className="img-fluid d-flex mx-auto my-4 h-100 w-100"
                src={product_image.repertoire}
                alt={`Product ${index}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(index)}
            />
        </div>
    ));

    return (
        <div>
            <div className="card-body">
                <img className="img-fluid d-flex mx-auto" style={{ height: '30vh', widt: '60vw' }} src={annonce.listePhotos[mainImageIndex].repertoire} alt="Card cap" />
                <div className='d-flex justify-content-around m-auto' style={{ height: '8vh', width: '70%' }}>
                    {liste_images}
                </div>
                <div className='my-5'>
                    <h5 className="card-title text-center">Prix : {getMoneyFormat(annonce.prix)} </h5>
                    <h6 className="card-subtitle text-muted text-center">{annonce.description}</h6>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ButtonValiderAnnonce clazz='btn btn-success' label="valider" idModal="#modalValider" annonce={annonce} />
                    <ButtonDetailAnnonce clazz='btn btn-info' label="detail" idModal="#modalCenter" annonce={annonce} />
                </div>
            </div>
        </div>
    );
}

export default Product;

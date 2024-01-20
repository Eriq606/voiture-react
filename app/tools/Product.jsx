
import React, { useState, useEffect } from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';
// import product_img from '../assets/assets/img/elements/4.jpg';
import Button from '../tools/Button';
import Image from 'next/image';
import ButtonModal from './ButtonModal';

function Product({ annonce, images }) {

    const [mainImageIndex, setMainImageIndex] = useState(0);

    function getMoneyFormat(montant) {
        const montantFormate = montant.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
        });
        return montantFormate;
    }

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
                    <Button couleur_theme='btn btn-success' label="valider" fonction={() => handleStockClick()} />
                    <ButtonModal clazz='btn btn-info' label="detail" idModal="#modalCenter" annonce={annonce} />
                    {/* modal */}
                    <div className="modal fade" id="modalCenter" tabindex="-1" style={{display: 'none'}} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalCenterTitle">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col mb-3">
                                            <label for="nameWithTitle" className="form-label">Name</label>
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-0">
                                            <label for="emailWithTitle" className="form-label">Email</label>
                                        </div>
                                        <div className="col mb-0">
                                            <label for="dobWithTitle" className="form-label">DOB</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin modal */}
                </div>
            </div>
        </div>
    );
}

export default Product;

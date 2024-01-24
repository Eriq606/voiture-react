// 'use client';

// import Image from "next/image";
// import styles from "../../components/annonce.module.css";
// import { useState } from "react";
// import ReactModal from "react-modal";
// import { NumericFormat } from "react-number-format";
// import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
// import { Button, Form } from "react-bootstrap";
// export default function AnnonceHistorique({annonce}){
//     const [showModal, setShowModal] = useState(false);
//     const [currentImgIndex, setCurrentImgIndex] = useState(0);
//     function prevImageIndex(){
//         setCurrentImgIndex(currentImgIndex>0?currentImgIndex-1:annonce.listePhotos.length-1);
//     }
//     function nextImageIndex(){
//         setCurrentImgIndex(currentImgIndex<annonce.listePhotos.length-1?currentImgIndex+1:0);
//     }
//     function openModal(){
//         setShowModal(true);
//     }
//     function closeModal(){
//         setShowModal(false);
//     }
//     const [currentImg, setCurrentImg] = useState(annonce.listePhotos.length>0?annonce.listePhotos[currentImgIndex].repertoire:"/voiture.jpeg");
//     function prevImage(){
//         if(annonce.listePhotos.length>0){
//             prevImageIndex();
//             setCurrentImg(annonce.listePhotos[currentImgIndex].repertoire);
//         }
//     }
//     function nextImage(){
//         if(annonce.listePhotos.length>0){
//             nextImageIndex();
//             setCurrentImg(annonce.listePhotos[currentImgIndex].repertoire);
//         }
//     }
//     const [favori, setFavori] = useState(annonce.favoris);
//     function changeFavori(){
//         setFavori(!favori);
//     }
//     return(<>
//         <div className={styles.annonce}>
//             <div className={styles.annonce__cardheader}>
//                 <p>Moi</p>
//                 <p>{annonce.dateHeureCreation}</p>
//             </div>
//             <p>Voiture : {annonce.marque.nomMarque} {annonce.modele.nomModele} {annonce.couleur.nomCouleur}</p>
//             <div className={styles.annonce__cardfooter}>
//                 <div className={styles.annonce__cardfooter__favori}>
//                     <Form.Check // prettier-ignore
//                         type={"checkbox"}
//                         id={`default-checkbox`}
//                         label={`Favori`}
//                         defaultChecked={favori}
//                         onClick={changeFavori}
//                     />
//                 </div>
//                 {/* <button className={styles.annonce__cardfooter__details} onClick={openModal}>Details</button> */}
//                 <Button variant="primary" onClick={() => setShowModal(true)}>
//                     Details
//                 </Button>
//                 <ReactModal
//                     isOpen={showModal}
//                     onRequestClose={closeModal}
//                     className={styles.annonce__modal}
//                     overlayClassName={styles.annonce__modal__overlay}>
//                     <div className={styles.annonce__modal__header}>
//                         <button onClick={closeModal} className={styles.annonce__modal__header__closebutton}><BsX></BsX></button>
//                     </div>
//                     <div className={styles.annonce__modal__body}>
//                         <p className={styles.annonce__modal__body__title}>Details annonce</p>
//                         <br></br>
//                         <p>{annonce.proprietaire.email}</p>
//                         <br></br>
//                         <p><span className={styles.annonce__modal__body__label}>Description:</span> {annonce.description}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Categorie:</span> {annonce.categorie.nomCategorie}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Modele:</span> {annonce.modele.nomModele}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Marque:</span> {annonce.marque.nomMarque}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Type </span>occasion: {annonce.typeOccasion.nomTypeOccasion}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Couleur:</span> {annonce.couleur.nomCouleur}</p>
//                         <p><span className={styles.annonce__modal__body__label}>Prix:</span> <NumericFormat value={annonce.prix.toFixed(2)} displayType="text" thousandSeparator={' '} decimalSeparator="," suffix={' Ar'} /></p>
//                         <div className={styles.annonce__modal__body__images}>
//                             <button className={styles.annonce__modal__body__images__imgbutton} onClick={prevImage}><BsArrowLeft/></button>
//                             <Image src={currentImg} width={300} height={200} alt="Car picture" className={styles.annonce__modal__body__images__image}></Image>
//                             <button className={styles.annonce__modal__body__images__imgbutton} onClick={nextImage}><BsArrowRight/></button>
//                         </div>
//                     </div>
//                 </ReactModal>
//             </div>
//         </div>
//     </>);
// }
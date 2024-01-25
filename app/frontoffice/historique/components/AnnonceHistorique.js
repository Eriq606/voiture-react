import "../../components/annonce.css";
export default function AnnonceHistorique({annonce}){
    const getMoneyFormat = (number) => {
        return  number.toLocaleString('mg-MG', {
            style: 'currency',
            currency: 'MGA',
          });
    };
    return(<>
        <div className="col-4">
            <div className="card">
                <div className="card-header annonce-header">
                    <h6>Moi</h6>
                    <h6>{annonce.dateHeureCreation}</h6>
                </div>
                <div className="card-body">
                    <div id={"annonce"+annonce.idAnnonce} className="carousel slide">
                        <div className="carousel-inner">
                            {annonce.listePhotos.map((photo, index)=>{
                                let itemclassName=index===0?"carousel-item active":"carousel-item";
                                return(<>
                                    <div key={index} className={itemclassName}>
                                        <img src={photo.repertoire} className="d-block" width={"100%"} height={"350vh"} alt="..."/>
                                    </div>
                                </>);
                            })}
                        </div>
                        <button className="carousel-control-prev carousel-control" type="button" data-bs-target={"#annonce"+annonce.idAnnonce} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carousel-control" type="button" data-bs-target={"#annonce"+annonce.idAnnonce} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="form-check favori">
                        <input className="form-check-input" type="checkbox" value="" id={"favori"+annonce.idAnnonce} defaultChecked={annonce.favoris}/>
                        <label className="form-check-label" htmlFor={"favori"+annonce.idAnnonce}>
                            Checked checkbox
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#detailsannonce">Details</button>
                    <div className="modal fade" id="detailsannonce" tabIndex="-1" aria-labelledby="detailsannonceLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="detailsannonceLabel">Details de l&apos;annonce</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <p style={{textAlign:"end"}}>Le {annonce.dateHeureCreation}</p>
                            <p>{annonce.proprietaire.email}</p>
                            <p>{annonce.description}</p>
                            <p>Caracteristiques:</p>
                            <ul>
                                <li><strong>Categorie:</strong> {annonce.categorie.nomCategorie}</li>
                                <li><strong>Modele:</strong> {annonce.modele.nomModele}</li>
                                <li><strong>Marque:</strong> {annonce.marque.nomMarque}</li>
                                <li><strong>Couleur:</strong> {annonce.couleur.nomCouleur}</li>
                                <li><strong>Type occasion:</strong> {annonce.typeOccasion.nomTypeOccasion}</li>
                            </ul>
                            <br></br>
                            <p><strong>Prix:</strong> {getMoneyFormat(annonce.prix)}</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
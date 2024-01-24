import "./annonce.css";
export default function Annonce({annonce}){
    return(<>
        <div className="col-4">
            <div className="card">
                <div className="card-header annonce-header">
                    <h6>{annonce.proprietaire.email}</h6>
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
                    <div class="form-check favori">
                        <input class="form-check-input" type="checkbox" value="" id={"favori"+annonce.idAnnonce} defaultChecked={annonce.favoris}/>
                        <label class="form-check-label" for={"favori"+annonce.idAnnonce}>
                            Checked checkbox
                        </label>
                    </div>
                    <button type="button" class="btn btn-primary m-2">Details</button>
                </div>
            </div>
        </div>
    </>);
}
import "./header.css";
export default function Header(){
    return(<>
    <div className="row g-4">
        <div className="col-12">
            <div className="bg-secondary rounded h-100 p-4">
                <h6>Filtre de recherche</h6>
                <div className="row filtre">
                    <div className="col-2">
                        <p className="select__label">Categorie</p>
                        <select className="form-select" id="categorie"
                            aria-label="Floating label select example">
                            <option selected>Tous</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <p className="select__label">Modele</p>
                        <select className="form-select" id="modele"
                            aria-label="Floating label select example">
                            <option selected>Tous</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <p className="select__label">Marque</p>
                        <select className="form-select" id="marque"
                            aria-label="Floating label select example">
                            <option selected>Tous</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <p>Prix min.</p>
                        <input type="text" className="form-control" id="prixmin"/>
                    </div>
                    <div className="col-2">
                        <p>Prix min.</p>
                        <input type="text" className="form-control" id="prixmin"/>
                    </div>
                    <button type="button" className="btn btn-info col-2 bouton__filtre">Filtrer</button>
                </div>
            </div>
        </div>
    </div>
</>);
}
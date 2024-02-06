import { useState, useEffect } from "react";
import "./header.css";
import getAllCriteres from "../../utils/AllCriteresGetter";
export default function Header({annonces = [], setAnnonces = () => {}}){
    const [allCriteres, setAllCriteres] = useState(null);
    const [filtreCategorie, setFiltreCategorie] = useState(0);
    const [filtreModele, setFiltreModele] = useState(0);
    const [filtreMarque, setFiltreMarque] = useState(0);
    const [filtrePrixMin, setFiltrePrixMin] = useState(0);
    const [filtrePrixMax, setFiltrePrixMax] = useState(0);
    const [effacerFiltre, setEffacerFiltre] = useState(false);

    const reInitFiltre = () => {
        window.location.reload();
    }

    const filtreAnnonces = (listeAnnonces,idCategorie, idModele, idMarque, prixMin, prixMax) => {
        return listeAnnonces.filter((annonce) => {
          const categorieMatch = idCategorie && idCategorie != 0 ? annonce.categorie.idCategorie == idCategorie : true;
          const modeleMatch = idModele && idModele != 0 ? annonce.modele.idModele == idModele : true;
          const marqueMatch = idMarque && idMarque != 0 ? annonce.marque.idMarque == idMarque : true;
      
          const prixMatch =
            (prixMin == 0 || annonce.prix >= prixMin) &&
            (prixMax == 0 || annonce.prix <= prixMax);
            console.log('annonce.categorie.idCategorie '+annonce.categorie.idCategorie+" ; idCategorie"+idCategorie);
            console.log('annonce.Modele.idModele '+annonce.modele.idModele+" ; idModele"+idModele);
            console.log('annonce.Marque.idMarque '+annonce.marque.idMarque+" ; idMarque"+idMarque);
            console.log('prixMin '+prixMin);
            console.log('prixMax '+prixMax);
          return categorieMatch && modeleMatch && marqueMatch && prixMatch;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = filtreAnnonces(annonces, filtreCategorie, filtreModele, filtreMarque, filtrePrixMin, filtrePrixMax);
        console.log('filtered '+filtered);
        setAnnonces(filtered);
        setEffacerFiltre(true);
    }

    useEffect(() => {
          
          getAllCriteres("https://vente-occaz-production-de3d.up.railway.app/api/v1/no-auth", null).then(reponse => {
              const criteres = reponse;
              setAllCriteres(criteres);
          });
    
      }, []);

    return(<>
    <div className="row g-4">
        <div className="col-12">
            <div className="bg-secondary rounded h-100 p-4">
                <h6>Filtre de recherche</h6>
                {effacerFiltre && (<button type="button" onClick={reInitFiltre} className="btn btn-warning col-2 bouton__filtre">effacer filtre</button>)}
                <form onSubmit={handleSubmit}>
                <div className="row filtre">
                    <div className="col-2">
                        <p className="select__label">Categorie</p>
                        <select className="form-select" id="categorie" onChange={(e) => {setFiltreCategorie(e.target.value)}}
                            aria-label="Floating label select example">
                            <option value={null}>Tous</option>
                            {allCriteres && allCriteres.categories.map((categorie, index) => (
                                <option key={index} value={categorie.idCategorie}>{categorie.nomCategorie}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-2">
                        <p className="select__label">Modele</p>
                        <select className="form-select" id="modele" onChange={(e) => {setFiltreModele(e.target.value)}}
                            aria-label="Floating label select example">
                            <option value={null}>Tous</option>
                            {allCriteres && allCriteres.modeles.map((modele, index) => (
                                <option key={index} value={modele.idModele}>{modele.nomModele}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-2">
                        <p className="select__label">Marque</p>
                        <select className="form-select" id="marque" onChange={(e) => {setFiltreMarque(e.target.value)}}
                            aria-label="Floating label select example">
                            <option value={null}>Tous</option>
                            {allCriteres && allCriteres.marques.map((marque, index) => (
                                <option key={index} value={marque.idMarque}>{marque.nomMarque}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-2">
                        <p>Prix min.</p>
                        <input type="text" className="form-control" id="prixmin" onChange={(e) => {setFiltrePrixMin(e.target.value)}}/>
                    </div>
                    <div className="col-2">
                        <p>Prix max.</p>
                        <input type="text" className="form-control" id="prixmax" onChange={(e) => {setFiltrePrixMax(e.target.value)}}/>
                    </div>
                    <button type="submit" className="btn btn-info col-2 bouton__filtre">Filtrer</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</>);
}
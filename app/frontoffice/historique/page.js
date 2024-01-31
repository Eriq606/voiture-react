'use client';

import { reponse } from "../format_annonce";
import Header from "../components/header";
import AnnonceHistorique from "./components/AnnonceHistorique";
import get from "../../utils/Getter";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
export default function Page(){
  const annonces=reponse.donnee;

  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(true);
  const [allAnnonces, setAllAnnonces] = useState([]);
  const [logged, setLogged] = useState(false);

  const setAllAnnoncesHistorique = (sess) => {
    try {
      get(
        `https://vente-occaz-production-nomena.up.railway.app/api/v1/annonces/historique-annonce/${sess.donnee.utilisateur.idUtilisateur}`,
        sess.donnee.token
      ).then(reponse => {
        if (reponse && typeof reponse === 'object' && 'code' in reponse) {
          if(reponse.code == '200') {
            const annonceHistorique = reponse.donnee;
            console.log(annonceHistorique);
            setAllAnnonces(annonceHistorique);
            setWait(false);
          } else {
            setError(reponse.message);
          }
        }
      }).catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const storedSessionString = sessionStorage.getItem("userSession");
    if (storedSessionString) {
      setLogged(true);
      
      console.log("with login "+storedSessionString);
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      
      try {
        setAllAnnoncesHistorique(sess);
      } catch (error) {
        console.log(error);
      }
    
    } 

  }, []);

    return (
        <>
        <div className="content">
          <div className="container-fluid pt-4 px-4">
          <Header annonces={allAnnonces} setAnnonces={setAllAnnonces} />
            <br></br>
            {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
            <div className="row g-4">
              {wait && (<Spinner animation="border" variant="success" />)}
              {allAnnonces.map((annonce, index)=>{
                return(<AnnonceHistorique key={index} annonce={annonce} logged={logged}/>)
              })}
            </div>
          </div>
        </div>
        </>
    );
}
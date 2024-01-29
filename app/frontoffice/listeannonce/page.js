'use client';

import { reponse } from "../format_annonce";
import Header from "../components/header";
import Annonce from "../components/annonce";
import get from "../../utils/Getter";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export default function ListeAnnonce(){
  const [session, setSession] = useState(null);
  const [allAnnonces, setAllAnnonces] = useState([]);
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(true);
  const [logged, setLogged] = useState(false);

  const setAllAnnonceWithLogin = (sess) => {
    try {
      get(
        `https://vente-occaz-production.up.railway.app/api/v1/annonces/non-vendues-nofiltre-etat-favori/${sess.donnee.utilisateur.idUtilisateur}`,
        sess.donnee.token
      ).then(reponse => {
        if (reponse && typeof reponse === 'object' && 'code' in reponse) {
          if(reponse.code == '200') {
            const annoncesAveclogin = reponse.donnee;
            console.log(annoncesAveclogin);
            setAllAnnonces(annoncesAveclogin);
            setWait(false);
          } else {
            setError(reponse.message);
          }
        } else {
          userDeconnected();
          setAllAnnonceNoLogin();
        }
      }).catch(error => {
        userDeconnected();
        setAllAnnonceNoLogin();});
    } catch (error) {
      console.log(error);
      userDeconnected();
      setAllAnnonceNoLogin();
    }
  }

  const setAllAnnonceNoLogin = () => {
    get(
      "https://vente-occaz-production.up.railway.app/api/v1/annonces/non-vendues-nofiltre",
      null
    ).then(reponse => {
      if(reponse.code == '200') {
        const annonces = reponse.donnee;
        console.log(annonces);
        setAllAnnonces(annonces);
        setWait(false);
      } else {
        setError(reponse.message);
      }
    });
  }

  const userDeconnected = () => {
    setWait(false);
    setLogged(false);
    sessionStorage.removeItem('userSession');
  }

  useEffect(() => {
    const storedSessionString = sessionStorage.getItem("userSession");
    if (storedSessionString) {
      setLogged(true);
      
      console.log("with login "+storedSessionString);
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      
      try {
        setAllAnnonceWithLogin(sess);
      } catch (error) {
        setAllAnnonceNoLogin();
      }
    
    } else {
      setLogged(false);
      console.log("no login");

      setAllAnnonceNoLogin();
    
    }

  }, []);

  // const annonces=reponse.donnee;
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
                return(<Annonce key={index} annonce={annonce} logged={logged} />)
              })}
            </div>
          </div>
        </div>
        </>
    );
}
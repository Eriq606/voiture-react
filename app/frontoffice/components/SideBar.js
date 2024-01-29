'use client';

import Link from "next/link";
import "../assets/css/style.css";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import send_formData from '../../utils/SenderFormDataPost';

export default function SideBar(){
    const [codeValue, setCode] = useState('');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccess] = useState(null);
    const [logged, setLogged] = useState(false);

    const testUserConnexion = async () => {
        const sessionActuelleStr = sessionStorage.getItem("userSession");
        if(sessionActuelleStr) {  
            console.log('sessionActuelleStr '+sessionActuelleStr);
            const formData = new FormData();
            const sessionActuelle = JSON.parse(sessionActuelleStr);
            formData.append('code', sessionActuelle.donnee.code.toString());
            try {
                const session = await send_formData("https://vente-occaz-production.up.railway.app/api/v1/login-by-code", formData, null);
                console.log('session '+session);
                if(session.code == '200') {
                    if(session.donnee.isConnected == 1) {
                        console.log('mbola connected');
                        return 1;
                    }
                  return 0;
                } else {
                  return 0;
                }
            } catch (e) {
                console.log('e '+e);
              return 0;
            }
        } 
        return 0;
    }

    useEffect(() => {
        testUserConnexion().then((stillLogged) => {
            console.log('stillLogged '+stillLogged);
            if(stillLogged == 0) { 
                setLogged(false);
                sessionStorage.removeItem('userSession');
                console.log('UserSession removed');
            }
            if(stillLogged == 1) setLogged(true);
        });
    }, []);
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('code', codeValue);
      console.log(formData);
      try {
          setWait(true);
          const session = await send_formData("https://vente-occaz-production.up.railway.app/api/v1/login-by-code", formData, null);
          console.log(session);
          if(session.code == '200') {
            const sessionString = JSON.stringify(session);
            sessionStorage.setItem('userSession', sessionString);
            setError(null);
            setSuccess('bienvenue '+session.donnee.utilisateur.email);
            setLogged(true);
            setTimeout(async () => {
                setWait(false);
                window.location.reload();
            }, 1000);
          } else {
            setError(session.message);
          }
      } catch (e) {
        setWait(false);
        setError('code expiré ou erroné');
      }
    }

    return(
        <>
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-secondary navbar-dark">
                    <Link href="#" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="bi bi-car-front"></i> Voitures</h3>
                    </Link>
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="bi bi-card-list me-2"></i>Annonces</Link>
                            <div className="dropdown-menu bg-transparent border-0">
                                <Link href="/frontoffice/listeannonce" className="dropdown-item">Liste d&apos;annonces</Link>
                                {logged && (
                                    <>
                                    <Link href="/frontoffice/historique" className="dropdown-item">Mes annonces</Link>
                                    <Link href="/frontoffice/favoris" className="dropdown-item">Favoris</Link>
                                    </>
                                )}
                            </div>
                        </div>
                        {logged && (
                        <Link href="/frontoffice/messagerie" className="nav-item nav-link"><i className="bi bi-chat-fill me-2"></i>Messagerie</Link>
                        )}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi bi-phone-fill me-2"></i>Se connecter avec mobile
                        </button>
                    </div>
                </nav>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {wait && (<Spinner animation="border" variant="success" />)}
                        {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
                        {successMessage && (<Alert key='success' variant='success'>{successMessage}</Alert>)}
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Se connecter par mobile</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit} type="text" placeholder="Code..." value={codeValue} onChange={(e) => setCode(e.target.value)}>
                            <div className="modal-body">
                                <div class="mb-3">
                                    <label for="codemobile" class="form-label">Code d&apos;authentification</label>
                                    <input type="text" class="form-control" id="codemobile"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="submit" className="btn btn-primary">Se connecter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
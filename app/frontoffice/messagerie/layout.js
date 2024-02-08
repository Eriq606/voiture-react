'use client';

import { curruser } from "../../format_curruser";
import { response_messagerie } from "./format_user";
import SideBarConvos from "./components/SidebarConvos";
import ContenuMessage from "./components/ContenuMessage";
import ListeContacts from "./components/ListeContacts";
import { useEffect, useState } from "react";
import get from "../../utils/Getter";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
export default function Layout({ children }) {

  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(true);
  const [current_user, setCurrent_user] = useState(curruser.donnee);

  useEffect(() => {
    const storedSessionString = sessionStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setCurrent_user(sess.donnee);

      get(
        `https://vente-occaz-production-de3d.up.railway.app/api/v1/contacts/${sess.donnee.utilisateur.idUtilisateur}`,
        sess.donnee.token
      ).then((reponse) => {
        if (reponse.code == "200") {
          const contacts = reponse.donnee;
          console.log(contacts);
          setContacts(contacts);
          setWait(false);
        } else {
          setError(reponse.message);
        }
      });

    }
  }, []);

//   const messagerie = response_messagerie.donnee;
  return (
    <>
      <div className="content">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {wait && (<Spinner animation="border" variant="success" />)}
            {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
            {/* <SideBarConvos messagerie={messagerie} current_user={current_user}></SideBarConvos> */}
            {contacts && (<ListeContacts contacts={contacts} current_user={current_user} />)}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

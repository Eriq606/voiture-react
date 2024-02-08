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
import "./components/sidebarconvos.css";
import Link from "next/link";
export default function Layout({ children }) {

  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(true);
  const [current_user, setCurrent_user] = useState(curruser.donnee);
  const [current_user1, setCurrent_user1]=useState(null);
  const [current_user2, setCurrent_user2]=useState(null);

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
  function handleChosenConvo(user1, user2){
    setCurrent_user1(user1);
    setCurrent_user2(user2);
  }

//   const messagerie = response_messagerie.donnee;
  let itemcss;
  return (
    <>
      <div className="content">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {wait && (<Spinner animation="border" variant="success" />)}
            {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
            {/* <SideBarConvos messagerie={messagerie} current_user={current_user}></SideBarConvos> */}
            {/* {contacts && (<ListeContacts contacts={contacts} current_user={current_user} />)} */}
            {contacts && (
            <div className="col-3" style={{height:"95vh",overflowY:"auto"}}>
              <div className="h-100 bg-secondary rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="mb-0">Messages</h6>
                  </div>
                  {contacts.map((contact, index)=>{
                      itemcss=(current_user1==current_user.utilisateur.idUtilisateur&&current_user2==contact.idUtilisateur)?"message__item--active":"";
                      return(<Link key={index} onClick={handleChosenConvo(current_user.utilisateur.idUtilisateur,contact.idUtilisateur)} href={"/frontoffice/messagerie/"+current_user.utilisateur.idUtilisateur+"/"+contact.idUtilisateur}>
                          <div className={"d-flex align-items-center border-bottom py-3 message__item "+itemcss}>
                              <div className="w-100 ms-3">
                                  <div className="d-flex w-100 justify-content-between">
                                      <h6 className="mb-0">{contact.email}</h6>
                                  </div>
                              </div>
                          </div>
                      </Link>);
                  })}
              </div>
            </div>)}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

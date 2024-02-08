'use client';
import { useState, useEffect } from "react";
import "./contenumessage.css";
import put from '../../../utils/Putter';
export default function ContenuMessage({messagerie, current_user, idRecepteur}){
    let classname_bubble;
    const [newMessage, setNewMessage] = useState('');
    
    const handleEnvoiMessage = async () => {
        happendMessage(newMessage);
        const raw = newMessage;
        try {
            put(`https://vente-occaz-production-de3d.up.railway.app/api/v1/messageries/${current_user.utilisateur.idUtilisateur}/${idRecepteur}`,
                raw,
                current_user.token
            ).then(reponse => {
                if(reponse.code == '200') {
                    console.log(reponse);
                }  else {
                    console.log('error sending message');
                }
            });
            setNewMessage('');
        } catch (error) {
            console.log(error);
        }
    }

    const happendMessage = (message) => {
        const contenuMessage = document.getElementById("contenu-message");
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        const bubble = document.createElement('div');
        bubble.setAttribute('class', 'col-6 my__bubble offset-6 bubble rounded');
        const p = document.createElement('p');
        p.innerHTML = message;
        bubble.appendChild(p);
        row.appendChild(bubble);
        contenuMessage.appendChild(row);
    }

    return(<>
        <div className="col-9">
            <div className="row contenu__message">
                <div className="h-100 bg-secondary rounded p-4" id="contenu-message">
                    {messagerie.map((message, index)=>{
                        classname_bubble=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?"col-6 my__bubble offset-6":"col-6 other__bubble";
                        return(<>
                            <div className="row">
                                <div className={classname_bubble+" bubble rounded"}>
                                    <p>{message.texte}</p>
                                </div>
                            </div>
                            <br></br>
                        </>);
                    })}
                </div>
            </div>
            <br></br>
            <div className="row zone__textemessage">
                <div className="bg-secondary rounded" style={{padding:"1%"}}>
                    <div className="row">
                        <div className="col-11">
                            <input type="text" value={newMessage} onChange={(e) => {setNewMessage(e.target.value)}} className="form-control input__envoi" id="prixmin"/>
                        </div>
                        <button type="button" onClick={handleEnvoiMessage} className="col-1 btn btn-info bouton__envoyer input__envoi">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
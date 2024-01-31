'use client';
import Link from "next/link";
import "./sidebarconvos.css";
export default function SideBarConvos({messagerie, current_user}){
    let user, shortMessage;
    return(<>
        <div className="col-3" style={{height:"95vh",overflowY:"auto"}}>
            <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">Messages</h6>
                </div>
                {messagerie.map((message, index)=>{
                    user=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?message.recepteur:message.envoyeur;
                    shortMessage=message.echanges[message.echanges.length-1].texte.substring(0, 23);
                    return(<Link key={index} href={"/frontoffice/messagerie/"+message.envoyeur.idUtilisateur+"/"+message.recepteur.idUtilisateur}>
                        <div className="d-flex align-items-center border-bottom py-3 message__item">
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">{user.email}</h6>
                                </div>
                                <span>{shortMessage}...</span>
                            </div>
                        </div>
                    </Link>);
                })}
            </div>
        </div>
    </>);
}
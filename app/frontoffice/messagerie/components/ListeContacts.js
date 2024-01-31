'use client';
import Link from "next/link";
import "./sidebarconvos.css";
export default function ListeContacts({contacts, current_user}){
    return(<>
        <div className="col-3" style={{height:"95vh",overflowY:"auto"}}>
            <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">Messages</h6>
                </div>
                {contacts.map((contact, index)=>{
                    return(<Link key={index} href={"/frontoffice/messagerie/"+current_user.utilisateur.idUtilisateur+"/"+contact.idUtilisateur}>
                        <div className="d-flex align-items-center border-bottom py-3 message__item">
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">{contact.email}</h6>
                                </div>
                            </div>
                        </div>
                    </Link>);
                })}
            </div>
        </div>
    </>);
}
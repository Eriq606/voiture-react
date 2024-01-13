'use client';
import { useEffect, useState } from "react";
import { response_messagerie } from "../format_user";
import ContenuMessage from "../components/ContenuMessage";

export default function Page({params}){
    const sender=params.message[0];
    const receiver=params.message[1];
    const messagerie=response_messagerie.donnee;
    let discu;
    for(let i=0;i<messagerie.length;i++){
        if(messagerie[i].envoyeur.idUtilisateur==sender&&messagerie[i].recepteur.idUtilisateur==receiver){
            discu=messagerie[i];
            break;
        }
    }
    const [curr_user, setCurrUser]=useState([]);
    useEffect(()=>{
        if(typeof window !== undefined && window.localStorage){
            let user;
            user=JSON.parse(localStorage.getItem("current_user"));
            setCurrUser(user);
        }
    },[]);
    return(<>
        <ContenuMessage messagerie={discu.echanges} current_user={curr_user} ></ContenuMessage>
    </>);
}
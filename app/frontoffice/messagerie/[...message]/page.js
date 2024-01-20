import { response_messagerie } from "../format_user";
import ContenuMessage from "../components/ContenuMessage";
import { curruser } from "@/app/format_curruser";

export default function Page({params}){
    const sender=params.message[0];
    const receiver=params.message[1];
    const messagerie=response_messagerie.donnee;
    let discu;
    for(let i=0;i<messagerie.length;i++){
        if((messagerie[i].envoyeur.idUtilisateur==sender&&messagerie[i].recepteur.idUtilisateur==receiver) || (messagerie[i].recepteur.idUtilisateur==sender&&messagerie[i].envoyeur.idUtilisateur==receiver)){
            discu=messagerie[i];
            break;
        }
    }
    const current_user=curruser.donnee;
    return(<>
        <ContenuMessage messagerie={discu.echanges} current_user={current_user} ></ContenuMessage>
    </>);
}
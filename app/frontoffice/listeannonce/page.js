import Annonce from "./components/annonce";
import styles from "@/app/frontoffice/listeannonce/listeannonce.module.css";
import { reponse } from "./format_annonce";
const annonces=reponse.donnee;
export default function ListeAnnonce(){
    return (
        <>
            <div className={styles.listeannonce}>
                {annonces.map((annonce)=>{
                    return <Annonce key={annonce.idAnnonce} annonce={annonce}></Annonce>
                })}
            </div>
        </>
    );
}
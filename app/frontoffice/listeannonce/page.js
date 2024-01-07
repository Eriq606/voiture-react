import Annonce from "./components/annonce";
import styles from "@/app/frontoffice/listeannonce/listeannonce.module.css";
const annonces=[
    {
        id:1,
        userimg:"/images.png",
        user:"user",
        voiture:"Voiture",
        date:"2023-11-12 19:02",
        favori:"true"
    },
    {
        id:2,
        userimg:"/images.png",
        user:"user",
        voiture:"Voiture",
        date:"2023-11-12 19:02",
        favori:"true"
    },
    {
        id:3,
        userimg:"/images.png",
        user:"user",
        voiture:"Voiture",
        date:"2023-11-12 19:02",
        favori:"true"
    },
    {
        id:4,
        userimg:"/images.png",
        user:"user",
        voiture:"Voiture",
        date:"2023-11-12 19:02",
        favori:"true"
    },
    {
        id:5,
        userimg:"/images.png",
        user:"user",
        voiture:"Voiture",
        date:"2023-11-12 19:02",
        favori:"true"
    }
];
export default function ListeAnnonce(){
    return (
        <>
            <div className={styles.listeannonce}>
                {annonces.map((annonce)=>{
                    return <Annonce key={annonce.id} annonce={annonce}></Annonce>
                })}
            </div>
        </>
    );
}
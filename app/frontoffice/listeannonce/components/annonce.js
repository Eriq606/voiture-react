import Image from "next/image";
import styles from "@/app/frontoffice/listeannonce/components/annonce.module.css";
export default function Annonce({annonce}){
    return(<>
        <div className={styles.annonce}>
            <div className={styles.annonce__cardheader}>
                <div className={styles.annonce__cardheader__user}>
                    <Image src={annonce.userimg} width={50} height={50} alt="user picture" className={styles.annonce__cardheader__user__image}></Image>
                    <p>{annonce.user}</p>
                </div>
                <p>{annonce.date}</p>
            </div>
            <p>Voiture : {annonce.voiture}</p>
            <div className={styles.annonce__cardfooter}>
                <div className={styles.annonce__cardfooter__favori}>
                    <input className={styles.annonce__cardfooter__favori__icon} type="checkbox" defaultChecked></input>
                    <p className={styles.annonce__cardfooter__favori__label}>Favori</p>
                </div>
                <button className={styles.annonce__cardfooter__details}>Details</button>
            </div>
        </div>
    </>);
}
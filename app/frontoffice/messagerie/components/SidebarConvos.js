import { BsArrowRight } from "react-icons/bs";
import styles from "@/app/frontoffice/messagerie/components/sidebarconvos.module.css";
import Link from "next/link";

export default function SideBarConvos({messagerie, current_user}){
    let user;
    return(<>
        <div className={styles.sidebarconvos}>
            <div className={styles.sidebarconvos__conversation}>
            {messagerie.map((message, index)=>{
                user=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?message.recepteur:message.envoyeur;
                return(
                    <Link href={"/frontoffice/messagerie/"+message.envoyeur.idUtilisateur+"/"+message.recepteur.idUtilisateur} key={index} className={styles.sidebarconvos__conversation__item}>
                        <p>{user.email}</p>
                        <div>
                            <p><BsArrowRight></BsArrowRight></p>
                        </div>
                    </Link>
                );
            })}
            </div>
        </div>
    </>);
}
import { BsFillSendFill } from "react-icons/bs";
import styles from "@/app/frontoffice/messagerie/components/contenumessage.module.css";
import { Card, CardBody } from "react-bootstrap";

export default function ContenuMessage({messagerie, current_user}){
    let classname_message, classname_bubble, person, classname_label;
    return(<>
        <div className={styles.contenumessage}>
            <div className={styles.contenumessage__conversation}>
                {messagerie.map((message, index)=>{
                    // {console.log(message.texte)}
                    classname_message=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?styles.contenumessage__conversation__dialogue__self:styles.contenumessage__conversation__dialogue__autre;
                    classname_bubble=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?styles.contenumessage__conversation__dialogue__bulle__self:styles.contenumessage__conversation__dialogue__bulle__autre;
                    classname_label=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?styles.contenumessage__conversation__dialogue__label__self:styles.contenumessage__conversation__dialogue__label__autre;
                    person=message.envoyeur.idUtilisateur==current_user.utilisateur.idUtilisateur?"":message.envoyeur.email;
                    return(
                        <div key={index} className={classname_message}>
                            <p className={classname_label}>{person}</p>
                            <div className={classname_bubble}>
                                <p>{message.texte}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.contenumessage__userinput}>
                <input type="text" placeholder="Message..." className={styles.contenumessage__userinput__input}></input>
                <button><BsFillSendFill className={styles.contenumessage__userinput__sendbutton__icon}></BsFillSendFill></button>
            </div>
        </div>
    </>);
}
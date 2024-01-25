import "./contenumessage.css";
export default function ContenuMessage({messagerie, current_user}){
    let classname_bubble;
    return(<>
        {/* <Col md={6} className={styles.contenumessage}>
            <div className={styles.contenumessage__conversation}>
                {messagerie.map((message, index)=>{
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
        </Col> */}
        <div className="col-9">
            <div className="row contenu__message">
                <div className="h-100 bg-secondary rounded p-4">
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
                            <input type="text" className="form-control input__envoi" id="prixmin"/>
                        </div>
                        <button type="button" className="col-1 btn btn-info bouton__envoyer input__envoi">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
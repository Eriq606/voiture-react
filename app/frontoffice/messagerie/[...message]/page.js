import { response_messagerie } from "../format_user";
import ContenuMessage from "../components/ContenuMessage";
import { curruser } from "../../../format_curruser";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export default function Page({params}){
    const sender=params.message[0];
    const receiver=params.message[1];

    const [wait, setWait] = useState(true);
    const [current_user, setCurrent_user] = useState(null);
    const [messagerie, setMessagerie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedSessionString = sessionStorage.getItem("userSession");
        if (storedSessionString) {
          const sess = JSON.parse(storedSessionString);
          setCurrent_user(sess.donnee);

          get(
            `https://vente-occaz-production.up.railway.app/api/v1/messageries/${sender}/${receiver}`,
             sess.donnee.token
          ).then(reponse => {
            if(reponse.code == '200') {
                setWait(false);
                setMessagerie(reponse.donnee);
            } else {
              setError(reponse.message);
            }
          });
        } 
    }, []);

    return(<>
        {wait && (<Spinner animation="border" variant="success" />)}
        {error && (<Alert key='warning' variant='warning'>{error}</Alert>)}
        {messagerie && (<ContenuMessage messagerie={messagerie.echanges} current_user={current_user} ></ContenuMessage>)}
    </>);
}
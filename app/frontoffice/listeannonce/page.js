import { reponse } from "../format_annonce";
import Header from "../components/header";
import Annonce from "../components/annonce";
export default function ListeAnnonce(){
  const annonces=reponse.donnee;
    return (
        <>
        <div className="content">
          <div className="container-fluid pt-4 px-4">
            <Header/>
            <br></br>
            <div className="row g-4">
              {annonces.map((annonce, index)=>{
                return(<Annonce key={index} annonce={annonce}/>)
              })}
            </div>
          </div>
        </div>
        </>
    );
}
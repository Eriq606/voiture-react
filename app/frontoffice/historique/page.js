import Annonce from "../components/annonce";

export default function Page(){
    return(<>
        <Header></Header>
        <div className={styles.listeannonce}>
            {annonces.map((annonce)=>{
                return <Annonce key={annonce.idAnnonce} annonce={annonce}></Annonce>
            })}
        </div>
    </>);
}
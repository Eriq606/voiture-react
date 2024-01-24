// import { Col } from "react-bootstrap";
// import Header from "../components/header";
// import { reponse } from "../format_annonce";
// import styles from "../listeannonce.module.css";
// import AnnonceHistorique from "./components/AnnonceHistorique";

// export default function Page(){
//     const annonces=reponse.donnee;
//     return(<>
//         <Col md={9}>
//             <Header></Header>
//             <div className={styles.listeannonce}>
//                 {annonces.map((annonce)=>{
//                     return <AnnonceHistorique key={annonce.idAnnonce} annonce={annonce}></AnnonceHistorique>
//                 })}
//             </div>
//         </Col>
//     </>);
// }
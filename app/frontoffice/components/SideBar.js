import { BsCardList, BsChat, BsFillPhoneFill, BsFillStarFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import styles from './sidebar.module.css';
import Link from "next/link";
import { Col } from "react-bootstrap";
export default function SideBar(){
    return(
        <>
            <Col md={3} className={styles.sidebar}>
                <div className={styles.userprofile}>
                    <p>User</p>
                </div>
                <Link href="/frontoffice/listeannonce">
                <div className={styles.sidebar__items__item}>
                    <p><BsCardList/> Liste des annonces</p>
                </div>
                </Link>
                <Link href="/frontoffice/historique">
                <div className={styles.sidebar__items__item}>
                    <p><BsClockHistory/> Historique des annonces</p>
                </div>
                </Link>
                <Link href="/frontoffice/favoris">
                <div className={styles.sidebar__items__item}>
                    <p><BsFillStarFill/> Favoris</p>
                </div>
                </Link>
                <Link href="/frontoffice/messagerie">
                <div className={styles.sidebar__items__item}>
                    <p><BsChat/> Messagerie</p>
                </div>
                </Link>
                <Link href="/frontoffice/connectmobile">
                <div className={styles.sidebar__items__item}>
                    <p><BsFillPhoneFill/> Se connecter avec mobile</p>
                </div>
                </Link>
            </Col>
        </>
    );
}
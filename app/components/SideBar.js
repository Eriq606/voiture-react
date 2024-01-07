import { BsCardList, BsChat, BsFillPhoneFill, BsFillStarFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import styles from '@/app/components/sidebar.module.css'
import Image from "next/image";
import Link from "next/link";
export default function SideBar(){
    return(
        <>
            <div className={styles.sidebar}>
                <div className={styles.userprofile}>
                    <Image src="/images.png" width={50} height={50} alt="user picture" className={styles.userprofile__image}></Image>
                    <p className={styles.userprofile__user}>User</p>
                </div>
                <div className={styles.sidebar__items}>
                    <Link href="/frontoffice/listeannonce" className={styles.sidebar__items__item}>
                        <p><BsCardList/> Liste des annonces</p>
                    </Link>
                    <Link href="/frontoffice/historique" className={styles.sidebar__items__item}>
                        <p><BsClockHistory/> Historique des annonces</p>
                    </Link>
                    <Link href="/frontoffice/favoris" className={styles.sidebar__items__item}>
                        <p><BsFillStarFill/> Favoris</p>
                    </Link>
                    <Link href="/frontoffice/messagerie" className={styles.sidebar__items__item}>
                        <p><BsChat/> Messagerie</p>
                    </Link>
                    <Link href="/frontoffice/connectmobile" className={styles.sidebar__items__item}>
                        <p><BsFillPhoneFill/> Se connecter avec mobile</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
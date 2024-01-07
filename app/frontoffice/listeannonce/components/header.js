import styles from "@/app/frontoffice/listeannonce/components/header.module.css";
export default function Header(){
    return(<>
        <div className={styles.listeannonce__header}>
            <div className={styles.listeannonce__header__fieldinput}>
                <label htmlFor="categorie-select">Categorie</label>
                <select className={styles.listeannonce__header__fieldinput__select} id="categorie-select">
                    <option>Tout</option>
                </select>
            </div>
            <div className={styles.listeannonce__header__fieldinput}>
                <label htmlFor="marque-select">Marque</label>
                <select className={styles.listeannonce__header__fieldinput__select} id="marque-select">
                    <option>Tout</option>
                </select>
            </div>
            <div className={styles.listeannonce__header__fieldinput}>
                <label htmlFor="modele-select">Modele</label>
                <select className={styles.listeannonce__header__fieldinput__select} id="modele-select">
                    <option>Tout</option>
                </select>
            </div>
            <div className={styles.listeannonce__header__fieldinput}>
                <label htmlFor="prix-min">Prix minimum</label>
                <input className={styles.listeannonce__header__fieldinput__text} type="text" id="prix-min"></input>
            </div>
            <div className={styles.listeannonce__header__fieldinput}>
                <label htmlFor="prix-max">Prix maximum</label>
                <input className={styles.listeannonce__header__fieldinput__text} type="text" id="prix-max"></input>
            </div>
            <button className={styles.listeannonce__header__button}>Filtrer</button>
        </div>
    </>);
}
import Link from "next/link";
export default function SideBar(){
    return(
        <>
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-secondary navbar-dark">
                    <Link href="#" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="bi bi-car-front"></i> Voitures</h3>
                    </Link>
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="bi bi-card-list me-2"></i>Annonces</Link>
                            <div className="dropdown-menu bg-transparent border-0">
                                <Link href="/frontoffice/listeannonce" className="dropdown-item">Liste d'annonces</Link>
                                <Link href="/frontoffice/historique" className="dropdown-item">Mes annonces</Link>
                                <Link href="/frontoffice/favoris" className="dropdown-item">Favoris</Link>
                            </div>
                        </div>
                        <Link href="/frontoffice/messagerie" className="nav-item nav-link"><i className="bi bi-chat-fill me-2"></i>Messagerie</Link>
                        <Link href="/frontoffice/connectmobile" className="nav-item nav-link"><i className="bi bi-phone-fill me-2"></i>Se connecter avec mobile</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
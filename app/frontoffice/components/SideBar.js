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
                                <Link href="/frontoffice/listeannonce" className="dropdown-item">Liste d&apos;annonces</Link>
                                <Link href="/frontoffice/historique" className="dropdown-item">Mes annonces</Link>
                                <Link href="/frontoffice/favoris" className="dropdown-item">Favoris</Link>
                            </div>
                        </div>
                        <Link href="/frontoffice/messagerie" className="nav-item nav-link"><i className="bi bi-chat-fill me-2"></i>Messagerie</Link>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi bi-phone-fill me-2"></i>Se connecter avec mobile
                        </button>
                    </div>
                </nav>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Se connecter par mobile</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="mb-3">
                                <label for="codemobile" class="form-label">Code d&apos;authentification</label>
                                <input type="email" class="form-control" id="codemobile"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" className="btn btn-primary">Se connecter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default function getAllAnnonces () {
    return {
        code: "200",
        message: "liste des annonces no login",
        donnee: [
            {
                idAnnonce: 6,
                proprietaire: {
                    idUtilisateur: 3,
                    email: "u2@gmail.com",
                    motDePasse: "1234",
                    isAdmin: 0
                },
                categorie: {
                    idCategorie: 1,
                    nomCategorie: "Voitures de Luxe"
                },
                modele: {
                    idModele: 2,
                    nomModele: "SUV"
                },
                typeOccasion: {
                    idTypeOccasion: 4,
                    nomTypeOccasion: "Promotion"
                },
                couleur: {
                    idCouleur: 2,
                    nomCouleur: "Bleu"
                },
                marque: {
                    idMarque: 3,
                    nomMarque: "Ford"
                },
                listePhotos: [
                    {
                        idPhoto: 1,
                        repertoire: "http://i.ibb.co/grG1hMS/silver-sedan-car-53876-84522.jpg"
                    },
                    {
                        idPhoto: 7,
                        repertoire: "http://i.ibb.co/19QQtHK/view-3d-car-23-2150796894.jpg"
                    },
                    {
                        idPhoto: 12,
                        repertoire: "http://i.ibb.co/D7Sn2pN/silver-sedan-car-53876-84522.jpg"
                    }
                ],
                prix: 3.5E7,
                pourcentageCommission: 14.0,
                description: "Porsche",
                etats: [
                    {
                        idEtatAnnonce: 7,
                        typeEtat: 10,
                        dateHeureEtat: "2024-0117T11:47.315174"
                    }
                ],
                etatAnnonce: 1,
                dateHeureCreation: "2024-0110T11:01",
                favoris: false
            },
            {
                idAnnonce: 1,
                proprietaire: {
                    idUtilisateur: 2,
                    email: "u1@gmail.com",
                    motDePasse: "1234",
                    isAdmin: 0
                },
                categorie: {
                    idCategorie: 5,
                    nomCategorie: "Vehicules Sportifs"
                },
                modele: {
                    idModele: 1,
                    nomModele: "Sedan"
                },
                typeOccasion: {
                    idTypeOccasion: 4,
                    nomTypeOccasion: "Promotion"
                },
                couleur: {
                    idCouleur: 2,
                    nomCouleur: "Bleu"
                },
                marque: {
                    idMarque: 4,
                    nomMarque: "BMW"
                },
                listePhotos: [
                    {
                        idPhoto: 1,
                        repertoire: "http://i.ibb.co/grG1hMS/silver-sedan-car-53876-84522.jpg"
                    },
                    {
                        idPhoto: 7,
                        repertoire: "http://i.ibb.co/19QQtHK/view-3d-car-23-2150796894.jpg"
                    },
                    {
                        idPhoto: 12,
                        repertoire: "http://i.ibb.co/D7Sn2pN/silver-sedan-car-53876-84522.jpg"
                    }
                ],
                prix: 2.8E7,
                pourcentageCommission: 0.0,
                description: "Cabriolet BMW … vendre, offre speciale.",
                etats: [
                    {
                        idEtatAnnonce: 3,
                        typeEtat: 10,
                        dateHeureEtat: "2024-0108T15:27"
                    }
                ],
                etatAnnonce: 1,
                dateHeureCreation: "2024-0108T02:37",
                favoris: false
            }
        ]
    }
}
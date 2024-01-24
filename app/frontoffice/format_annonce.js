export const reponse={
    code: "200",
    message: "",
    donnee: [
        {
            idAnnonce: 1,
            proprietaire: {
                idUtilisateur: 2,
                email: "u1@gmail.com",
                motDePasse: "1234",
                isAdmin: 0
            },
            categorie: {
                idCategorie: 2,
                nomCategorie: "Vehicules Electriques"
            },
            modele: {
                idModele: 4,
                nomModele: "Cabriolet"
            },
            typeOccasion: {
                idTypeOccasion: 1,
                nomTypeOccasion: "Occasion Standard"
            },
            couleur: {
                idCouleur: 3,
                nomCouleur: "Noir"
            },
            marque: {
                idMarque: 5,
                nomMarque: "Mercedes-Benz"
            },
            listePhotos: [
                {
                    idPhoto: 1,
                    repertoire: "/images.png"
                },
                {
                    idPhoto: 2,
                    repertoire: "/voiture2.jpeg"
                }
            ],
            prix: 2.5E7,
            pourcentageCommission: 0.0,
            description: "Toyota Sedan en vente, excellente condition.",
            etats: [],
            etatAnnonce: 1,
            favoris:false,
            dateHeureCreation:"2021-11-12 19:02"
        },
        {
            idAnnonce: 2,
            proprietaire: {
                idUtilisateur: 2,
                email: "u1@gmail.com",
                motDePasse: "1234",
                isAdmin: 0
            },
            categorie: {
                idCategorie: 2,
                nomCategorie: "Vehicules Electriques"
            },
            modele: {
                idModele: 4,
                nomModele: "Cabriolet"
            },
            typeOccasion: {
                idTypeOccasion: 1,
                nomTypeOccasion: "Occasion Standard"
            },
            couleur: {
                idCouleur: 3,
                nomCouleur: "Noir"
            },
            marque: {
                idMarque: 5,
                nomMarque: "Mercedes-Benz"
            },
            listePhotos: [
                {
                    idPhoto: 1,
                    repertoire: "/images.png"
                },
                {
                    idPhoto: 2,
                    repertoire: "/voiture.jpeg"
                }
            ],
            prix: 2.5E7,
            pourcentageCommission: 0.0,
            description: "Toyota Sedan en vente, excellente condition.",
            etats: [],
            etatAnnonce: 1,
            favoris:true,
            dateHeureCreation:"2021-11-12 19:02"
        }
    ]
}
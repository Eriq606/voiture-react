export default function getAllCategories () {
    return {
        code: '200',
        message: 'ArrayList reçu',
        donnee: [
            {
                idCategorie: 1,
                nomCategorie: 'Voitures de Luxe'
            },
            {
                idCategorie: 2,
                nomCategorie: 'Vehicules Electriques'
            },
            {
                idCategorie: 3,
                nomCategorie: 'Vehicules Hybrides'
            },
            {
                idCategorie: 4,
                nomCategorie: 'Vehicules Utilitaires'
            },
            {
                idCategorie: 5,
                nomCategorie: 'Vehicules Sportifs'
            },
            {
                idCategorie: 6,
                nomCategorie: 'CategTest'
            }
        ]
    }
}
import get from './Getter';
export default async function getAllCriteres(baseUrl, token) {
    const data_marques = await get(`${baseUrl}/marques`, token);
    const data_categories = await get(`${baseUrl}/categories`, token);
    const data_modeles = await get(`${baseUrl}/modeles`, token);
    const data_typeOccasions = await get(`${baseUrl}/type-occasions`, token);
    const data_couleurs = await get(`${baseUrl}/couleurs`, token);
    const allCritere = {
        marques : data_marques.donnee, 
        categories : data_categories.donnee,
        modeles : data_modeles.donnee,
        typeOccasions : data_typeOccasions.donnee,
        couleurs : data_couleurs.donnee
    };
    return allCritere;
}
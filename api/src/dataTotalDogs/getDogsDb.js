const  {Dog, Temperament } = require("../db");


// pedido a la base de dato
// tengo un arreglo con los dog de db
const getDogsDb = async () => {
    try {
        return await Dog.findAll({
            include: [{
                model:Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }]
        })
    } catch (error) {
        console.log(error.message)
    }
}
module.exports= {getDogsDb};


//en la ruta getAll si pido lo de la db primerop me sale un array vacio pq no cree nada, recien se empieza a cargar haciendo el psot


// const axios = require ("axios")
// const { Dog } = require("../db");


//  const getDogsDb = async () => { 
//  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ");
//     let aux= apiInfo.data.map((dog) =>{
//     const obj = {
//         id: dog.id,
//         name: dog.name,
//         height: dog.height.metric,
//         weight: dog.weight.metric,
//         breed_group: dog.breed_group,
//         life_span: dog.life_span,
//         image: dog.image.url, 
//         bred_for: dog.bred_for,
//         origin: dog.origin,
//         temperament: dog.temperament,
//     }
//     // console.log(obj);
//     return obj
//     //obtengo un array con cada temperamento , con id y name
//  })

//  // creo los temp en la db, el bulkcreate crea todos los obj al mismo tiempo y recibe un array con ellos
//  Dog.bulkCreater(aux)
//  //obtengo un arreglo de obj con temperamentos (con id y name)
// };

// module.exports = getDogsDb;


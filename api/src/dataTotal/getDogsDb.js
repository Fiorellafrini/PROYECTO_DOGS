const  {Dog, Temperament } = require("../db");




//pedido a la base de dato
//tengo un arreglo con los dog de db
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


//en la tuta getAll si pido lo de la db primerop me sale un array vacio pq no cree nada, recien se empieza a cargar haciendo el psot